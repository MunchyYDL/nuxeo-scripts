import type { DocType, Schema } from "./model";

const SERVER = "http://localhost:8080";
const BASE_URL = "/nuxeo/api/v1";

export const getDocType = async (name: string): Promise<DocType> =>
	_fetch(`/config/types/${name}`);
export const getDocTypes = async (): Promise<object> => _fetch("/config/types");

export const getSchema = async (name: string): Promise<Schema> =>
	_fetch(`/config/schemas/${name}`);
export const getSchemas = async (): Promise<object> =>
	_fetch("/config/schemas");

// biome-ignore lint/suspicious/noExplicitAny: Keep it simple for now
async function _fetch(endpoint: string): Promise<any> {
	try {
		const response = await fetch(SERVER + BASE_URL + endpoint, {
			headers: {
				// biome-ignore lint/style/noNonNullAssertion: Keep it simple for now
				authorization: process.env.NUXEO_AUTHORIZATION!,
			},
		});
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
		return await response.json();
	} catch (error) {
		console.error(error.message);
	}
}
