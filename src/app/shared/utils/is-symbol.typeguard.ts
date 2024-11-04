import { isNotNull } from './is-null.typeguard';

export const isSymbol = (obj: unknown): obj is symbol =>
    isNotNull(obj) && typeof obj === 'symbol';
