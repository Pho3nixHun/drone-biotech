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
    closeButtonXVM: { icon: MatIcon.ADD, variant: 'fill' },
    commentLabelKey: enMock.commentLabel,
    coordinatesLabelKey: enMock.coordinatesLabel,
    missionNameLabelKey: enMock.missionNameLabel,
    applicationDateLabelKey: enMock.applicationDateLabel,
    areaData: null,
    cancelButtonXVM: {
        icon: MatIcon.ADD,
        variant: 'fill',
    },
    dosePerHqLabelKey: enMock.dosePerHqLabel,
    mapFormControlVM: {
        defaultCenter: null,

        mapAreaSelectFormControlVM: {
            areaValueKey: enMock.areaValue,
            editButtonXVM: {
                icon: MatIcon.ADD,
                variant: 'fill',
            },
            coordinatesLabelKey: enMock.coordinatesLabel,
            addButtonXVM: {
                icon: MatIcon.ADD,
                variant: 'fill',
            },
            deleteButtonXVM: {
                icon: MatIcon.ADD,
                variant: 'fill',
            },
        },
        mapPointSelectFormControlVM: {
            addButtonXVM: {
                icon: MatIcon.ADD,
                variant: 'fill',
            },
            deleteButtonXVM: {
                icon: MatIcon.ADD,
                variant: 'fill',
            },
        },
        mapSearchInputFormControlVM: {
            distanceValueKey: enMock.dosePerHqLabel,
            placeholderKey: enMock.dosePerHqLabel,
        },
    },
    submitButtonXVM: {
        icon: MatIcon.ADD,
        variant: 'fill',
    },
    targetAreaLabelKey: enMock.targetAreaLabel,
    titleKey: enMock.title,
    type: 'areaDataDialogVM',
    entryPointLabelKey: enMock.entryPointLabel,
};

export const mockVMWithAreaData: AreaDataDialogVM = {
    closeButtonXVM: { icon: MatIcon.ADD, variant: 'fill' },
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
    cancelButtonXVM: {
        icon: MatIcon.ADD,
        variant: 'fill',
    },
    dosePerHqLabelKey: enMock.dosePerHqLabel,
    mapFormControlVM: {
        defaultCenter: null,

        mapAreaSelectFormControlVM: {
            areaValueKey: enMock.areaValue,
            editButtonXVM: {
                icon: MatIcon.ADD,
                variant: 'fill',
            },
            coordinatesLabelKey: enMock.coordinatesLabel,
            addButtonXVM: {
                icon: MatIcon.ADD,
                variant: 'fill',
            },
            deleteButtonXVM: {
                icon: MatIcon.ADD,
                variant: 'fill',
            },
        },
        mapPointSelectFormControlVM: {
            addButtonXVM: {
                icon: MatIcon.ADD,
                variant: 'fill',
            },
            deleteButtonXVM: {
                icon: MatIcon.ADD,
                variant: 'fill',
            },
        },
        mapSearchInputFormControlVM: {
            distanceValueKey: enMock.dosePerHqLabel,
            placeholderKey: enMock.dosePerHqLabel,
        },
    },

    submitButtonXVM: {
        icon: MatIcon.ADD,
        variant: 'fill',
    },
    targetAreaLabelKey: enMock.targetAreaLabel,
    titleKey: enMock.title,
    type: 'areaDataDialogVM',
    entryPointLabelKey: enMock.entryPointLabel,
};
