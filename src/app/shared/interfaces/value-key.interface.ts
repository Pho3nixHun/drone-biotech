import { WithTitle } from './with-title.interface';

export type TitleWithoutValueKey = WithTitle;

export type TitleWithValueKey = WithTitle & WithKey;

interface WithValue<V> {
    value: V;
}

export interface WithKey {
    valueKey: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface WithoutKey {}

export type ValueType<T, V> = WithValue<V> &
    (T extends WithKey ? WithKey : T extends WithoutKey ? WithoutKey : never);

export type KeyValuePair<T, V> = ValueType<T, V> & {
    key: string;
};

export type KVsFromVM<VM> = {
    [K in keyof VM as `${K & string}KV`]: Lowercase<K & string> extends
        | `${string}date${string}`
        | `${string}money${string}`
        ? KeyValuePair<WithKey, VM[K]>
        : KeyValuePair<WithoutKey, VM[K]>;
};

export const hasValueKey = (
    obj: ValueType<WithKey | WithoutKey, number>
): obj is ValueType<WithKey, number> => 'valueKey' in obj;
