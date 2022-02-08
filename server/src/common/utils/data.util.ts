export const toArray = <T = any>(entity: T | T[]): T[] => Array.isArray(entity) ? entity : Array.of(entity) 