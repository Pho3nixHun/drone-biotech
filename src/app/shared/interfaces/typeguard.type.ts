export type TypeGuard<T> = (value: unknown) => value is T;

export const isTypeGuard = <T>(value: unknown): value is TypeGuard<T> =>
    typeof value === 'function';
