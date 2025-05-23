import { isObject } from '@utils/is-object.typeguard';
import { ProgressItemType } from 'src/app/pages/mission-details-page/mission-details-page.model';

export interface ProgressLogItemVM {
    statusType: ProgressItemType;
    date: Date;
    description: string;
}

export const isProgressLogItemVM = (obj: unknown): obj is ProgressLogItemVM =>
    isObject(obj) &&
    'statusType' in obj &&
    'date' in obj &&
    'description' in obj;
