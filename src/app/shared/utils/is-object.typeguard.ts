import { isNotArray } from './is-array.typeguard';
import { isNotNull } from './is-null.typeguard';
import { isTypeGuard, TypeGuard } from '@interfaces/typeguard.type';

type KeyConstraint = string | number | symbol;

export const isObject = (value: unknown): value is object =>
    typeof value === 'object';

export const isRecord = (
    value: unknown
): value is Record<KeyConstraint, unknown> =>
    isObject(value) && isNotNull(value) && isNotArray(value);

export const isRecordWithKey = <V, K extends string>(
    value: unknown,
    key: K,
    typeguard?: TypeGuard<V>
): value is Record<K, V> & Record<KeyConstraint, unknown> =>
    isRecord(value) &&
    key in value &&
    (!typeguard || typeguard((value as Record<K, V>)[key]));

export const isRecordWithKeys = <K extends string, V = unknown>(
    value: unknown,
    typeguard: TypeGuard<V> | K,
    ...keys: K[]
): value is Record<K, V> & Record<KeyConstraint, unknown> =>
    isRecord(value) &&
    (isTypeGuard(typeguard)
        ? keys.every((key) => key in value) &&
          keys.every((key) => typeguard((value as Record<K, V>)[key]))
        : [...keys, typeguard].every((key) => key in value));
