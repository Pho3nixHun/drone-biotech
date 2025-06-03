import { WithTitle } from '@interfaces/with-title.interface';
import { ProgressItemVM } from '../../mission-details-page.model';
import { ProgressLogItemVM } from './components/progress-frame/components/progress-log-item-list/components/progress-log-item/progress-log-item.model';

interface ProgressItemGroupVM extends WithTitle {
    progressItemVMs: ProgressItemVM[];
}

interface PreparationProgressItemGroupVM extends ProgressItemGroupVM {
    type: 'preparation';
}

interface ExecutionProgressItemGroupVM extends ProgressItemGroupVM {
    type: 'execution';
}

type ProgressFrameVM = WithTitle;

export type ProgressItemGroupType =
    | PreparationProgressItemGroupVM
    | ExecutionProgressItemGroupVM;

interface StatusProgressFrameVM extends ProgressFrameVM {
    progressItemGroupVMs: ProgressItemGroupType[];
}

interface LogProgressFrameVM extends ProgressFrameVM {
    logItemVMs: ProgressLogItemVM[];
    progressItemDateValueKey: string;
}

export interface ProgressUpdateFormControlVM {
    logFrameVM: LogProgressFrameVM;
    statusFrameVM: StatusProgressFrameVM;
}
