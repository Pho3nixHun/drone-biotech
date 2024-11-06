import { isRecordWithKey } from '@utils/is-object.typeguard';
import { isString } from '@utils/is-string.typeguard';

export interface WithId {
    id: string;
}

export const isWithId = (obj: unknown): obj is WithId => {
    return isRecordWithKey(obj, 'id', isString);
};
