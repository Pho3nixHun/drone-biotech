export const isString = (value: unknown): value is string =>
    typeof value === 'string';
export const isNotString = <T>(value: T | string): value is T =>
    !isString(value);
export const assertString = (value: unknown): asserts value is string => {
    if (!isString(value)) {
        throw new TypeError(
            `Expected value to be a string, but received: ${value}`
        );
    }
};
export const assertNotString = <T>(value: T | string): asserts value is T => {
    if (isString(value)) {
        throw new TypeError(
            `Expected value to be a non-string, but received: ${value}`
        );
    }
};
export const isEmptyString = (value: unknown): value is '' => value === '';

export const isEmptyStringOrWhitespace = (value: unknown): value is '' =>
    isEmptyString(value) || /^\s+$/.test(value as string);
