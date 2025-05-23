import { FrameVM } from '@components/frame/frame-vm';
import { ProgressUpdateFormControlVM } from './components/progress-update-form-control/progress-update-form-control.model';
import { Coordinates } from '@stores/location/location.model';
import { WithLink } from '@interfaces/with-link.interface';
import { MissionGridItemVM } from './components/mission-grid-item/mission-grid-item.model';
import { WithTextNode } from '@interfaces/with-text-node.interface';
import { WithBackgroundImageSrc } from '@interfaces/with-background-image-src.interface';
import { Type } from '@angular/core';
import { FormDialogVM } from './components/progress-update-form-control/components/form-dialog/form-dialog.model';
import { FormDialogComponent } from './components/progress-update-form-control/components/form-dialog/form-dialog.component';
import { MissionStatusType } from './components/mission-header/components/mission-status/mission-status.model';
import { ProgressLogItemVM } from './components/progress-update-form-control/components/progress-frame/components/progress-log-item-list/components/progress-log-item/progress-log-item.model';

interface ButtonVM extends WithLink, WithTextNode {}

export type Role = 'customer' | 'office' | 'pilot';

export interface MissionDetailsPageVM extends FrameVM {
    role: Role;
    missionDataXVM: MissionDataXVM;
    navigateButtonVM: ButtonVM;
    detailsGridItemVM: DetailsGridItemVM;
    suppliesGridItemVM: SuppliesGridItemVM;
    progressGridItemVM: ProgressGridItemVM;
    messagesGridItemVM: MessagesGridItemVM;
    createdDateValueKey: string;
}

interface MissionDataXVM extends MissionData {
    createdDate: Date;
    missionStatusType: MissionStatusType;
}

export interface MissionData {
    missionName: string;
    applicationDate: Date;
    targetArea: Coordinates[];
    entryPoint: Coordinates;
    dosePerHa: number;
    comment: string;
}

export interface MapControl {
    targetArea: Coordinates[];
    entryPoint: Coordinates;
}

type DetailsItemType = 'dose' | 'date' | 'area' | 'distance' | 'comment';
type Value = string | { valueKey: string; params: Record<string, unknown> };

export interface DetailsItemXVM {
    type: DetailsItemType;
    matIconName: string;
    labelKey: string;
    value: Value;
}

interface DetailsGridItemVM extends MissionGridItemVM {
    detailsItemXVMs: DetailsItemXVM[];
}

type Unit = 'litre' | 'unit' | 'kg';

interface SupplyItemXVM {
    name: string;
    quantity: number;
    unit: Unit;
}

interface SuppliesGridItemVM extends MissionGridItemVM {
    supplyItemXVMs: SupplyItemXVM[];
}

interface ProgressGridItemVM extends MissionGridItemVM {
    formControlVM: ProgressUpdateFormControlVM;
}

export interface MessageItemXVM extends WithBackgroundImageSrc {
    altText: string;
    name: string;
    message: string;
    date: Date;
}

interface MessagesGridItemVM extends MissionGridItemVM {
    messageItemXVMs: MessageItemXVM[];
    dateValueKey: string;
    submitButtonTextKey: string;
}

interface ComponentWithVM<C, VM> {
    component: Type<C>;
    vm: VM;
}
export type DialogType = ComponentWithVM<FormDialogComponent, FormDialogVM>;

export interface ProgressItemVM {
    roles: Role[];
    availableAt: MissionStatusType[];
    disabled: boolean;
    matIconName: 'keyboard_arrow_right';
    type: ProgressItemType;
    actionType: DialogType | ProgressLogItemVM;
}

export type ProgressItemType =
    | 'accept'
    | 'reject'
    | 'cancel'
    | 'assign'
    | 'travel'
    | 'arrive'
    | 'start'
    | 'progress'
    | 'abort'
    | 'complete';

export const mapProgressItemTypeToCSSStyle = (
    status: ProgressItemType
): string => {
    return (
        {
            accept: 'bg-blue-100 hover:bg-blue-200 text-blue-700',
            reject: 'bg-blue-100 hover:bg-blue-200 text-blue-700',
            cancel: 'bg-blue-100 hover:bg-blue-200 text-blue-700',
            assign: 'bg-blue-100 hover:bg-blue-200 text-blue-700',
            travel: 'bg-blue-100 hover:bg-blue-200 text-blue-700',
            arrive: 'bg-blue-100 hover:bg-blue-200 text-blue-700',
            start: 'bg-green-100 hover:bg-green-200 text-green-700',
            progress: 'bg-red-100 hover:bg-red-200 text-red-700',
            abort: 'bg-yellow-100 hover:bg-yellow-200 text-yellow-700',
            complete: 'bg-red-100 hover:bg-red-200 text-red-700',
        }[status] || ''
    );
};

export const mapProgressItemTypeToCSSBorderStyle = (
    status: ProgressItemType
): string => {
    return (
        {
            accept: 'border-blue-400',
            reject: 'border-blue-400',
            cancel: 'border-blue-400',
            assign: 'border-blue-400',
            travel: 'border-blue-400',
            arrive: 'border-blue-400',
            start: 'border-green-400',
            progress: 'border-yellow-400',
            abort: 'border-yellow-400',
            complete: 'border-red-400',
        }[status] || ''
    );
};

export const mapProgressItemTypeToTranslocoKey = (
    status: ProgressItemType
): string => {
    return (
        {
            accept: 'MissionDetailsPage.progressItem.accept.title',
            reject: 'MissionDetailsPage.progressItem.reject.title',
            cancel: 'MissionDetailsPage.progressItem.cancel.title',
            assign: 'MissionDetailsPage.progressItem.assign.title',
            travel: 'MissionDetailsPage.progressItem.travel.title',
            arrive: 'MissionDetailsPage.progressItem.arrive.title',
            start: 'MissionDetailsPage.progressItem.start.title',
            progress: 'MissionDetailsPage.progressItem.progress.title',
            abort: 'MissionDetailsPage.progressItem.abort.title',
            complete: 'MissionDetailsPage.progressItem.complete.title',
        }[status] || ''
    );
};

export const mapDetailsItemTypeToCSSStyle = (type: DetailsItemType): string => {
    return (
        {
            area: 'bg-blue-200',
            comment: 'bg-yellow-200',
            date: 'bg-purple-200',
            distance: 'bg-red-200',
            dose: 'bg-green-200',
        }[type] || ''
    );
};
