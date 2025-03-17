export interface WithTextNode {
    textKey: string;
}

export const isWithTextNode = (obj: unknown): obj is WithTextNode =>
    typeof obj === 'object' && obj !== null && 'textKey' in obj;
