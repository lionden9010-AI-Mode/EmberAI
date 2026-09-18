export interface Repository<T> { findById(ownerId: string, id: string): Promise<T | undefined>; save(ownerId: string, value: T): Promise<T>; delete(ownerId: string, id: string): Promise<void>; }
