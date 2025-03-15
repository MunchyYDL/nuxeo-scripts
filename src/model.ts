export type DocType = {
	"entity-type": "docType";
	name: string;
	parent: string;
	facets: string[];
	schemas: Schema[];
};

export type FieldType = "string" | "long" | "double" | "date";

export type Schema = {
	"entity-type": "schema";
	name: string;
	prefix?: string;
	"@prefix"?: string;
	fields: Record<string, FieldType>;
};

export const MappedType: Record<FieldType, string> = {
	string: "string",
	long: "number",
	double: "number",
	date: "Date",
};
