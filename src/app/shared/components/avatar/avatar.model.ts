import { WithImage } from '@interfaces/with-image.interface';
import { User } from 'src/app/pages/order-details-page/order-details-page.model';

interface AvatarXVMWithInitials {
    type: 'withInitials';
    initials: string;
    colors: CSSStyles;
}

interface AvatarXVMWithImage extends WithImage {
    type: 'withImage';
}

export type AvatarXVM = AvatarXVMWithInitials | AvatarXVMWithImage;

export const mapAvatarXVM = (user: User): AvatarXVM => {
    const initials = user.name
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 3);

    return user.photoUrl
        ? {
              type: 'withImage',
              imageSrc: user.photoUrl,
              altTextKey: `${initials}`,
          }
        : {
              type: 'withInitials',
              initials,
              colors: mapInitialsToCSSStyles(initials),
          };
};

export const mapInitialsToCSSStyles = (initials: string): CSSStyles => {
    const colors = [
        CSSStyles.BLUE,
        CSSStyles.GREEN,
        CSSStyles.PURPLE,
        CSSStyles.RED,
        CSSStyles.YELLOW,
    ];
    const sum = initials
        .split('')
        .reduce((acc, curr) => acc + curr.charCodeAt(0), 0);
    return colors[sum % colors.length];
};

export enum CSSStyles {
    RED = 'text-red-500 *:bg-red-200',
    GREEN = 'text-green-500 *:bg-green-200',
    BLUE = 'text-blue-500 *:bg-blue-200',
    YELLOW = 'text-yellow-500 *:bg-yellow-200',
    PURPLE = 'text-purple-500 *:bg-purple-200',
}
