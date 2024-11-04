export const isCallable = (obj: unknown): obj is CallableFunction =>
    typeof obj === 'function';
