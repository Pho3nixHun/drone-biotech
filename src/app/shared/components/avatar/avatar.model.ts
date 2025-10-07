import { WithImage } from '@interfaces/with-image.interface';

interface AvatarVMWithInitials {
    type: 'withInitials';
    initials: string;
}

interface AvatarVMWithImage extends WithImage {
    type: 'withImage';
}

export type AvatarVM = AvatarVMWithInitials | AvatarVMWithImage;

export const mapInitialsToRemainder = (
    initials: string,
    length: number
): number => {
    const sum = initials
        .split('')
        .reduce((acc, curr) => acc + curr.charCodeAt(0), 0);
    return sum % length;
};
