export const isBoolean = (value: unknown): value is boolean =>
    typeof value === 'boolean';

export const isNotBoolean = <T>(value: T | boolean): value is T =>
    !isBoolean(value);

export const isBooleanTrue = (value: unknown): value is 'true' =>
    value === 'true';

export const isBooleanFalse = (value: unknown): value is 'false' =>
    value === 'false';

export const isBooleanString = (value: unknown): value is 'true' | 'false' =>
    value === 'true' || value === 'false';

export const assertBoolean = (value: unknown): asserts value is boolean => {
    if (!isBoolean(value)) {
        throw new TypeError(
            `Expected value to be boolean, but received: ${value}`
        );
    }
};

export const assertNonBoolean = (
    value: unknown
): asserts value is Exclude<unknown, boolean> => {
    if (isBoolean(value)) {
        throw new TypeError(
            `Expected value to be non-boolean, but received: ${value}`
        );
    }
};
