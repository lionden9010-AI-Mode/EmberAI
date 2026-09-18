export type Brand<T, Name extends string> = T & { readonly __brand: Name };
export type ISODate = Brand<string, "ISODate">;
export const clamp = (value: number, min = 0, max = 100) => Math.min(max, Math.max(min, value));
export const stableId = (namespace: string, seed: string) => `${namespace}_${[...seed].reduce((hash, char) => ((hash * 31 + char.charCodeAt(0)) >>> 0), 7).toString(36)}`;
