export interface WithImage {
    imageSrc: string;
    altTextKey: string;
}

export const isWithImage = (obj: unknown): obj is WithImage =>
    typeof obj === 'object' &&
    obj !== null &&
    'imageSrc' in obj &&
    'altTextKey' in obj;
