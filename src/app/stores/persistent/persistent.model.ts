import { JSONValue } from 'src/app/shared/interfaces/JSON-value.interface';

export interface PersistentStoreConfig {
    storage: Storage;
    root: string;
}

export type PersistentStoreStorage = JSONValue;

export interface PersistentStoreState {
    storage: Record<string, PersistentStoreStorage>;
    error: Error | null;
}
