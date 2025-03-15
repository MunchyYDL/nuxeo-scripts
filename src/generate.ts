import { getDocType, getDocTypes } from "./api.ts";
import { MappedType, type Schema, type DocType } from "./model.ts";
import { dir, log } from "./utils.ts";

const convertDocType = (dt: DocType): string[] => {
	const result: string[] = [];

	result.push(`type ${dt.name} = {`);
	result.push(...convertSchema(dt.schemas[0]));
	result.push("};");

	return result;
};

const convertSchema = (schema: Schema): string[] => {
	const result: string[] = [];

	for (const [name, type] of Object.entries(schema.fields)) {
		const mappedType = MappedType[type];
		result.push(`  ${name}: ${mappedType};`);
	}

	return result;
};

const convert = (dt: DocType): string => convertDocType(dt).join("\n");

const checkPrerequisites = (): boolean => {
	const auth = process.env.NUXEO_AUTHORIZATION;
	if (!auth || !auth.startsWith("Basic ")) {
		console.warn(`\n🔴 Missing value - NUXEO_AUTHORIZATION: '${auth}'`);
		console.warn("   Please set this env var and rerun the program.");
		return false;
	}

	console.log(`\n✅ Using value - NUXEO_AUTHORIZATION: '${auth}'`);
	return true;
};

const main = async (): Promise<void> => {
	if (!checkPrerequisites()) {
		return;
	}

	const name = "Contract";
	const docType = await getDocType(name);

	// log(`docType: '${name}'`, stringify(docType));
	// dir(`docType: '${name}'`, docType);
	log(`\n${convert(docType)}`);
};

await main();
