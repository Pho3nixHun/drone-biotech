export type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

export const isJSONValue = (obj: unknown): obj is JSONValue => {
  if (
    typeof obj === 'string' ||
    typeof obj === 'number' ||
    typeof obj === 'boolean' ||
    obj === null
  ) {
    return true;
  }

  if (Array.isArray(obj)) {
    return obj.every(isJSONValue);
  }

  if (typeof obj === 'object' && obj !== null) {
    return Object.values(obj).every(isJSONValue);
  }

  return false;
};
