export const isUndefined = (value: unknown): value is undefined =>
    typeof value === 'undefined';
export const isNotUndefined = <T>(value: T | undefined): value is T =>
    !isUndefined(value);

export const assertNonUndefined = <T>(
    value: T | undefined
): asserts value is T => {
    if (isUndefined(value)) {
        throw new TypeError(
            `Expected value to be non-undefined, but received: ${value}`
        );
    }
};

export const assertUndefined = <T>(
    value: T | undefined
): asserts value is undefined => {
    if (!isUndefined(value)) {
        throw new TypeError(
            `Expected value to be undefined, but received: ${value}`
        );
    }
};
export const defaultIfUndefined = <T>(
    value: T | undefined,
    defaultValue: T
): T => (isUndefined(value) ? defaultValue : value);
