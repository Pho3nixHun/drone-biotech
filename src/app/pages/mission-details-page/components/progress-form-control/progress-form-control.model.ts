import { WithTitle } from '@interfaces/with-title.interface';

export type Status =
    | 'arrive'
    | 'customerCancel'
    | 'officeCancel'
    | 'assign'
    | 'accept'
    | 'travel'
    | 'start'
    | 'progress'
    | 'abort'
    | 'complete'
    | 'reject';

export type Color = 'blue' | 'red' | 'green' | 'orange';

interface ProgressGroupXVM {
    labelKey: string;
    progressItemListXVM: ProgressItemListXVM;
    stepIndicatorXVM: StepIndicatorXVM;
}

interface ProgressItemListXVM {
    progressItemXVMs: ProgressItemXVM[];
}

type SectionCardVM = WithTitle;

interface UpdateSectionCardXVM extends SectionCardVM {
    progressGroupXVMs: ProgressGroupXVM[];
}

export interface LogItem {
    type: Status;
    text: string;
    creationDate: Date;
}

interface ProgressItemXVM extends Pick<LogItem, 'type'> {
    disabled: boolean;
    color: Color;
    buttonTextKey: string;
    matIconName: string;
}

export interface LogItemXVM extends LogItem, WithTitle {
    color: Color;
    creationDate: Date;
    creationDateValueKey: string;
}

type LogsSectionCardXVM = SectionCardVM;

interface StepIndicatorXVM {
    color: 'green' | 'blue';
}

export interface ProgressFormControlVM {
    logItems: LogItem[];
    creationDateValueKey: string;
    updateSectionCardXVM: UpdateSectionCardXVM;
    logsSectionCardXVM: LogsSectionCardXVM;
}

export const mapLogItemToLogItemXVM = (
    item: LogItem,
    creationDateValueKey: string
): LogItemXVM => ({
    type: item.type,
    text: item.text,
    titleKey: mapLogItemTypeToLogItemXVMTitleKey(item.type),
    color: mapLogItemTypeToLogItemXVMBorderColor(item.type),
    creationDate: item.creationDate,
    creationDateValueKey,
});

const mapLogItemTypeToLogItemXVMTitleKey = (type: Status): string => {
    return (
        {
            arrive: 'MissionDetailsPage.logs.progress.arrive.title',
            customerCancel:
                'MissionDetailsPage.logs.progress.customerCancel.title',
            officeCancel: 'MissionDetailsPage.logs.progress.officeCancel.title',
            assign: 'MissionDetailsPage.logs.progress.assign.title',
            accept: 'MissionDetailsPage.logs.progress.accept.title',
            travel: 'MissionDetailsPage.logs.progress.travel.title',
            start: 'MissionDetailsPage.logs.progress.start.title',
            progress: 'MissionDetailsPage.logs.progress.progress.title',
            abort: 'MissionDetailsPage.logs.progress.abort.title',
            complete: 'MissionDetailsPage.logs.progress.complete.title',
            reject: 'MissionDetailsPage.logs.progress.reject.title',
        }[type] || ''
    );
};

const borderColorMap: Record<Status, Color> = {
    reject: 'red',
    arrive: 'blue',
    customerCancel: 'orange',
    officeCancel: 'orange',
    assign: 'blue',
    accept: 'blue',
    travel: 'orange',
    start: 'green',
    progress: 'orange',
    abort: 'red',
    complete: 'green',
};

function mapLogItemTypeToLogItemXVMBorderColor(type: Status): Color {
    return borderColorMap[type];
}
