export const isNull = (value: unknown): value is null => value === null;
export const isNotNull = <T>(value: T | null): value is T => !isNull(value);

export const assertNull = (value: unknown): asserts value is null => {
    if (!isNull(value)) {
        throw new TypeError(
            `Expected value to be null, but received: ${value}`
        );
    }
};
export const assertNonNull = <T>(value: T | null): asserts value is T => {
    if (isNull(value)) {
        throw new TypeError(
            `Expected value to be non-null, but received: ${value}`
        );
    }
};

export const defaultIfNull = <T>(value: T | null, defaultValue: T): T =>
    isNull(value) ? defaultValue : value;
