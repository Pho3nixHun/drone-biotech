import { isBoolean } from '@utils/is-boolean.typeguard';
import { isNullish } from '@utils/is-nullish.typeguard';
import { isNumber } from '@utils/is-number.typeguard';
import { isObject } from '@utils/is-object.typeguard';
import { isString } from '@utils/is-string.typeguard';

export type JSONValue =
    | string
    | number
    | boolean
    | null
    | JSONValue[]
    | { [key: string]: JSONValue };

export const isJSONValue = (value: unknown): value is JSONValue =>
    [isNullish, isString, isNumber, isBoolean].some((fn) => fn(value)) ||
    (isObject(value) && Object.values(value).every(isJSONValue));
