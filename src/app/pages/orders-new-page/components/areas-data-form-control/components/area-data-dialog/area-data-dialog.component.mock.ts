import { MatIcon } from '@interfaces/mat-icon.enum';
import { AreaDataDialogVM } from './area-data-dialog.model';

export const enMock = {
    applicationDateLabel: 'applicationDate',
    applicationDatePlaceholder: 'applicationDatePlace',
    dosePerHqLabel: 'dosePerHq',
    dosePerHqLabelPlaceholder: 'dosePerHqPlace',
    addButtonText: 'addButton',
    deleteButtonText: 'deleteButton',
    submitButtonText: 'submitButton',
    targetAreaLabel: 'targetArea',
    targetAreaLabelPlaceholder: 'targetAreaPlace',
    entryPointLabel: 'entryPoint',
    entryPointLabelPlaceholder: 'entryPointPlace',
    areaValue: 'area',
    editButtonText: 'edit',
    coordinatesLabel: 'coordinates',
    coordinatesPlaceholder: 'coordinatesPlace',
    commentLabel: 'comment',
    commentPlaceholder: 'commentPlace',
    missionNameLabel: 'missionName',
    missionNamePlaceholder: 'missionNamePlace',
    cancelButtonText: 'cancelButton',
    title: 'tit',
    dosePerHqMinErrorAssistiveTextValue: 'dosePerHqMinErrorAssistiveText',
    missionNameMaxCharactersAllowedAssistiveTextValue:
        'missionNameMaxCharactersAllowedAssistiveText',
    missionNameMaxCharactersCounterAssistiveTextValue:
        'missionNameMaxCharactersCounterAssistiveText',
    requiredAssistiveText: 'requiredAssistive',
};

export const mockVMWithoutAreaData: AreaDataDialogVM = {
    applicationDateInputTextXVM: {
        id: 'id',
        labelKey: enMock.applicationDateLabel,
        placeholderKey: enMock.applicationDatePlaceholder,
        readonly: false,
        autocomplete: 'name',
        type: 'email',
    },
    commentInputTextareaXVM: {
        id: 'id',
        labelKey: enMock.commentLabel,
        placeholderKey: enMock.commentPlaceholder,
        readonly: false,
    },
    dosePerHqInputTextXVM: {
        id: 'id',
        labelKey: enMock.dosePerHqLabel,
        placeholderKey: enMock.dosePerHqLabelPlaceholder,
        readonly: false,
    },
    missionNameInputTextXVM: {
        id: 'id',
        labelKey: enMock.missionNameLabel,
        placeholderKey: enMock.missionNamePlaceholder,
        readonly: false,
        autocomplete: 'off',
        type: 'email',
    },
    dosePerHqMinErrorAssistiveTextValueKey:
        enMock.dosePerHqMinErrorAssistiveTextValue,
    missionNameMaxCharactersAllowedAssistiveTextValueKey:
        enMock.missionNameMaxCharactersAllowedAssistiveTextValue,
    missionNameMaxCharactersCounterAssistiveTextValueKey:
        enMock.missionNameMaxCharactersCounterAssistiveTextValue,
    requiredAssistiveTextKey: enMock.requiredAssistiveText,

    closeButtonXVM: { icon: MatIcon.ADD, variant: 'fill' },
    areaData: null,
    cancelButtonXVM: {
        icon: MatIcon.ADD,
        variant: 'fill',
    },
    mapFormControlVM: {
        defaultCenter: null,

        mapAreaSelectFormControlVM: {
            areaValueKey: enMock.areaValue,
            editButtonXVM: {
                icon: MatIcon.ADD,
                variant: 'fill',
            },
            coordinatesInputTextareaXVM: {
                id: 'id',
                labelKey: enMock.coordinatesLabel,
                placeholderKey: enMock.coordinatesPlaceholder,
                readonly: false,
            },
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
    titleKey: enMock.title,
    type: 'areaDataDialogVM',
};

export const mockVMWithAreaData: AreaDataDialogVM = {
    applicationDateInputTextXVM: {
        id: 'id',
        labelKey: enMock.applicationDateLabel,
        placeholderKey: enMock.applicationDatePlaceholder,
        readonly: false,
        autocomplete: 'name',
        type: 'email',
    },
    commentInputTextareaXVM: {
        id: 'id',
        labelKey: enMock.commentLabel,
        placeholderKey: enMock.commentPlaceholder,
        readonly: false,
    },
    dosePerHqInputTextXVM: {
        id: 'id',
        labelKey: enMock.dosePerHqLabel,
        placeholderKey: enMock.dosePerHqLabelPlaceholder,
        readonly: false,
    },
    missionNameInputTextXVM: {
        id: 'id',
        labelKey: enMock.missionNameLabel,
        placeholderKey: enMock.missionNamePlaceholder,
        readonly: false,
        autocomplete: 'off',
        type: 'email',
    },
    dosePerHqMinErrorAssistiveTextValueKey:
        enMock.dosePerHqMinErrorAssistiveTextValue,
    missionNameMaxCharactersAllowedAssistiveTextValueKey:
        enMock.missionNameMaxCharactersAllowedAssistiveTextValue,
    missionNameMaxCharactersCounterAssistiveTextValueKey:
        enMock.missionNameMaxCharactersCounterAssistiveTextValue,
    requiredAssistiveTextKey: enMock.requiredAssistiveText,

    closeButtonXVM: { icon: MatIcon.ADD, variant: 'fill' },
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
    mapFormControlVM: {
        defaultCenter: null,

        mapAreaSelectFormControlVM: {
            areaValueKey: enMock.areaValue,
            editButtonXVM: {
                icon: MatIcon.ADD,
                variant: 'fill',
            },
            coordinatesInputTextareaXVM: {
                id: 'id',
                labelKey: enMock.coordinatesLabel,
                placeholderKey: enMock.coordinatesPlaceholder,
                readonly: false,
            },
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
    titleKey: enMock.title,
    type: 'areaDataDialogVM',
};
