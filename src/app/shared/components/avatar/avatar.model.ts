import { WithImage } from '@interfaces/with-image.interface';

interface AvatarXVMWithInitials {
    type: 'withInitials';
    initials: string;
    status: Avatar;
}

interface AvatarXVMWithImage extends WithImage {
    type: 'withImage';
}

export type AvatarXVM = AvatarXVMWithInitials | AvatarXVMWithImage;

export enum Avatar {
    RED,
    GREEN,
    BLUE,
    YELLOW,
    PURPLE,
}
