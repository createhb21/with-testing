export const isObject = (object: unknown): object is Record<string, unknown> => typeof object === 'object' && object !== null && !Array.isArray(object);
