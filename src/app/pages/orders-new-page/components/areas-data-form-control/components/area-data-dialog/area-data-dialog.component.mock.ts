import { MatIcon } from '@interfaces/mat-icon.enum';
import { AreaDataDialogVM } from './area-data-dialog.model';

export const enMock = {
    applicationDateLabel: 'applicationDate',
    cancelButtonText: 'cancelButton',
    dosePerHqLabel: 'dosePerHq',
    addButtonText: 'addButton',
    deleteButtonText: 'deleteButton',
    submitButtonText: 'submitButton',
    targetAreaLabel: 'targetArea',
    title: 'tit',
    entryPointLabel: 'entryPoint',
    areaValue: 'area',
    editButtonText: 'edit',
    coordinatesLabel: 'coordinates',
    commentLabel: 'comment',
    missionNameLabel: 'missionName',
};

export const mockVMWithoutAreaData: AreaDataDialogVM = {
    closeButtonVM: { type: 'withIcon', icon: MatIcon.ADD, variant: 'fill' },
    commentLabelKey: enMock.commentLabel,
    coordinatesLabelKey: enMock.coordinatesLabel,
    missionNameLabelKey: enMock.missionNameLabel,
    applicationDateLabelKey: enMock.applicationDateLabel,
    areaData: null,
    cancelButtonVM: {
        type: 'withIcon',
        icon: MatIcon.ADD,
        variant: 'fill',
    },
    dosePerHqLabelKey: enMock.dosePerHqLabel,
    mapFormControlVM: {
        defaultCenter: null,

        mapAreaSelectFormControlVM: {
            areaValueKey: enMock.areaValue,
            editButtonVM: {
                type: 'withIcon',
                icon: MatIcon.ADD,
                variant: 'fill',
            },
            coordinatesLabelKey: enMock.coordinatesLabel,
            addButtonVM: {
                type: 'withIcon',
                icon: MatIcon.ADD,
                variant: 'fill',
            },
            deleteButtonVM: {
                type: 'withIcon',
                icon: MatIcon.ADD,
                variant: 'fill',
            },
        },
        mapPointSelectFormControlVM: {
            addButtonVM: {
                type: 'withIcon',
                icon: MatIcon.ADD,
                variant: 'fill',
            },
            deleteButtonVM: {
                type: 'withIcon',
                icon: MatIcon.ADD,
                variant: 'fill',
            },
        },
        mapSearchInputFormControlVM: {
            distanceValueKey: enMock.dosePerHqLabel,
            placeholderKey: enMock.dosePerHqLabel,
        },
    },
    submitButtonVM: {
        type: 'withIcon',
        icon: MatIcon.ADD,
        variant: 'fill',
    },
    targetAreaLabelKey: enMock.targetAreaLabel,
    titleKey: enMock.title,
    type: 'areaDataDialogVM',
    entryPointLabelKey: enMock.entryPointLabel,
};

export const mockVMWithAreaData: AreaDataDialogVM = {
    closeButtonVM: { type: 'withIcon', icon: MatIcon.ADD, variant: 'fill' },
    commentLabelKey: enMock.commentLabel,
    coordinatesLabelKey: enMock.coordinatesLabel,
    missionNameLabelKey: enMock.missionNameLabel,
    applicationDateLabelKey: enMock.applicationDateLabel,
    areaData: {
        comment: enMock.commentLabel,
        missionName: enMock.missionNameLabel,
        applicationDate: new Date(10),
        dosePerHq: 1,
        entryPoint: { lat: 10, lng: 10 },
        id: 'id',
        targetArea: [{ lat: 10, lng: 10 }],
    },
    cancelButtonVM: {
        type: 'withIcon',
        icon: MatIcon.ADD,
        variant: 'fill',
    },
    dosePerHqLabelKey: enMock.dosePerHqLabel,
    mapFormControlVM: {
        defaultCenter: null,

        mapAreaSelectFormControlVM: {
            areaValueKey: enMock.areaValue,
            editButtonVM: {
                type: 'withIcon',
                icon: MatIcon.ADD,
                variant: 'fill',
            },
            coordinatesLabelKey: enMock.coordinatesLabel,
            addButtonVM: {
                type: 'withIcon',
                icon: MatIcon.ADD,
                variant: 'fill',
            },
            deleteButtonVM: {
                type: 'withIcon',
                icon: MatIcon.ADD,
                variant: 'fill',
            },
        },
        mapPointSelectFormControlVM: {
            addButtonVM: {
                type: 'withIcon',
                icon: MatIcon.ADD,
                variant: 'fill',
            },
            deleteButtonVM: {
                type: 'withIcon',
                icon: MatIcon.ADD,
                variant: 'fill',
            },
        },
        mapSearchInputFormControlVM: {
            distanceValueKey: enMock.dosePerHqLabel,
            placeholderKey: enMock.dosePerHqLabel,
        },
    },

    submitButtonVM: {
        type: 'withIcon',
        icon: MatIcon.ADD,
        variant: 'fill',
    },
    targetAreaLabelKey: enMock.targetAreaLabel,
    titleKey: enMock.title,
    type: 'areaDataDialogVM',
    entryPointLabelKey: enMock.entryPointLabel,
};
