export const dir = (text: string, obj?: object): void => {
	log(`\n${text} => `);
	console.dir(obj, { colors: true, depth: null });
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const log = (...args: any[]): void => {
	console.log(...args);
};

export const stringify = (obj: object): string => JSON.stringify(obj, null, 2);
