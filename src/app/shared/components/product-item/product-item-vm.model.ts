import { WithId } from '@interfaces/with-id.interace';
import { WithImage } from '@interfaces/with-image.interface';

export interface ProductItemVM extends WithImage, WithId {
  titleKey: string;
  descriptionKey: string;
}
