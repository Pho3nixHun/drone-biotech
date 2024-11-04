import { TypeGuard } from '@interfaces/typeguard.type';

export const isArray = <T = unknown>(
    value: unknown,
    typeguard?: TypeGuard<T>
): value is T[] =>
    Array.isArray(value) && (!typeguard || value.every(typeguard));

export const isNotArray = <T = unknown>(
    value: unknown,
    typeguard?: TypeGuard<T>
): value is Exclude<unknown[], T> => !isArray(value, typeguard);

export const assertArray = <T = unknown>(
    value: unknown,
    typeguard?: TypeGuard<T>
): asserts value is T[] => {
    if (!isArray(value, typeguard)) {
        throw new TypeError(
            `Expected value to be an array, but received: ${value}`
        );
    }
};

export const assertNotArray = (
    value: unknown
): asserts value is Exclude<unknown[], unknown> => {
    if (isArray(value)) {
        throw new TypeError(
            `Expected value to be a non-array, but received: ${value}`
        );
    }
};
