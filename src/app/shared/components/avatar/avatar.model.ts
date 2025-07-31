import { WithImage } from '@interfaces/with-image.interface';

interface AvatarXVMWithInitials {
    type: 'withInitials';
    initials: string;
    colors: AvatarXVMColors;
}

interface AvatarXVMWithImage extends WithImage {
    type: 'withImage';
}

export type AvatarXVM = AvatarXVMWithInitials | AvatarXVMWithImage;

export enum AvatarXVMColors {
    RED = 'text-red-500 *:bg-red-200',
    GREEN = 'text-green-500 *:bg-green-200',
    BLUE = 'text-blue-500 *:bg-blue-200',
    YELLOW = 'text-yellow-500 *:bg-yellow-200',
    PURPLE = 'text-purple-500 *:bg-purple-200',
}
