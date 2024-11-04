import { isString } from './is-string.typeguard';

export const isNumber = (value: unknown): value is number =>
    typeof value === 'number';
export const isNotNumber = <T>(value: T | number): value is T =>
    !isNumber(value);
export const assertNumber = (value: unknown): asserts value is number => {
    if (!isNumber(value)) {
        throw new TypeError(
            `Expected value to be a number, but received: ${value}`
        );
    }
};
export const assertNotNumber = <T>(value: T | number): asserts value is T => {
    if (isNumber(value)) {
        throw new TypeError(
            `Expected value to be a non-number, but received: ${value}`
        );
    }
};
export const isNumberString = (value: unknown): value is string =>
    isString(value) && /^\d+$/.test(value.trim());
