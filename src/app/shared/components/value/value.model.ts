import { HashMap } from '@jsverse/transloco';

interface WithValueKey {
    type: 'withValueKey';
    key: string;
    params: HashMap;
}
interface WithoutValueKey {
    type: 'withoutValueKey';
    value: string | number | Date;
}

export type ValueVM = WithValueKey | WithoutValueKey;
