import { FrameVM } from '@components/frame/frame.model';
import { WithId } from '@interfaces/with-id.interface';
import { WithImage } from '@interfaces/with-image.interface';
import { WithRouterLink } from '@interfaces/with-router-link.interface';
import { WithTitle } from '@interfaces/with-title.interface';

interface ProductCardXVM extends WithRouterLink, WithId, WithTitle, WithImage {
    descriptionKey: string;
}

interface ProductFrame extends FrameVM {
    productCardXVMs: ProductCardXVM[];
}
export interface ProductsPageVM {
    productFrame: ProductFrame;
}
