export const isNullish = (obj: unknown): obj is null | undefined =>
    (obj ?? false) === false;
export const isNotNullish = <T>(obj: T | null | undefined): obj is T =>
    !isNullish(obj);
export const defaultIfNullish = <T>(
    value: T | null | undefined,
    defaultValue: T
): T => (isNullish(value) ? defaultValue : value);
export const assertNonNullish = <T>(
    value: T | null | undefined,
    message = 'Value is null or undefined'
): asserts value is T => {
    if (isNullish(value)) {
        throw new TypeError(message);
    }
};

export const assertNullish = <T>(
    value: T | null | undefined,
    message = 'Value is not null or undefined'
): asserts value is null | undefined => {
    if (isNotNullish(value)) {
        throw new TypeError(message);
    }
};
