import { MatIcon } from '@interfaces/mat-icon.enum';
import { OrdersNewPageVM } from './orders-new-page-vm.model';

export const ordersNewPageVMDefault: OrdersNewPageVM = {
    titleKey: 'OrdersNewPage.title',
    requiredAssistiveTextKey: 'OrdersNewPage.requiredAssistiveText',
    internalOrderNumberInputTextXVM: {
        id: 'internalOrderNumber',
        autocomplete: 'off',
        readonly: false,
        type: 'text',
        labelKey: 'OrdersNewPage.internalOrderNumberLabel',
        placeholderKey: 'OrdersNewPage.internalOrderNumberPlaceholder',
    },
    nameInputTextXVM: {
        id: 'name',
        autocomplete: 'name',
        labelKey: 'OrdersNewPage.nameLabel',
        placeholderKey: 'OrdersNewPage.endCustomerPlaceholder',
        readonly: false,
        type: 'text',
    },
    emailInputTextXVM: {
        id: 'email',
        autocomplete: 'email',
        placeholderKey: 'OrdersNewPage.emailPlaceholder',
        readonly: false,
        type: 'email',
        labelKey: 'OrdersNewPage.emailLabel',
    },
    phoneNumberInputTextXVM: {
        id: 'phoneNumber',
        autocomplete: 'tel',
        readonly: false,
        type: 'text',
        placeholderKey: 'OrdersNewPage.phoneNumberPlaceholder',
        labelKey: 'OrdersNewPage.phoneNumberLabel',
    },
    endCustomerInputTextXVM: {
        id: 'endCustomer',
        autocomplete: 'name',
        readonly: false,
        type: 'text',
        placeholderKey: 'OrdersNewPage.endCustomerPlaceholder',
        labelKey: 'OrdersNewPage.endCustomerLabel',
    },
    submitButtonXVM: {
        textKey: 'OrdersNewPage.submitButtonText',
        variant: 'fill',
    },
    areasDataFormControlVM: {
        labelKey: 'OrdersNewPage.areasDataLabel',
        actionsHeaderKey: 'OrdersNewPage.areasDataFormControl.actionsHeader',
        targetAreaSizeHeaderKey:
            'OrdersNewPage.areasDataFormControl.targetAreaSizeHeader',
        entryPointHeaderKey:
            'OrdersNewPage.areasDataFormControl.entryPointHeader',
        doseHeaderKey: 'OrdersNewPage.areasDataFormControl.doseHeader',
        applicationDateHeaderKey:
            'OrdersNewPage.areasDataFormControl.applicationDateHeader',
        trichogrammaRequirementHeaderKey:
            'OrdersNewPage.areasDataFormControl.trichogrammaRequirementHeader',
        distanceFromHeadOfficeHeaderKey:
            'OrdersNewPage.areasDataFormControl.distanceFromHeadOfficeHeader',
        totalDistanceFromHeadOfficeHeaderKey:
            'OrdersNewPage.areasDataFormControl.totalDistanceFromHeadOfficeHeader',
        totalTargetAreaSizeHeaderKey:
            'OrdersNewPage.areasDataFormControl.totalTargetAreaSizeHeader',
        totalTrichogrammaRequirementHeaderKey:
            'OrdersNewPage.areasDataFormControl.totalTrichogrammaRequirementHeader',
        applicationDateValueKey:
            'OrdersNewPage.areasDataFormControl.applicationDateValue',
        distanceFromHeadOfficeValueKey:
            'OrdersNewPage.areasDataFormControl.distanceFromHeadOfficeValue',
        doseValueKey: 'OrdersNewPage.areasDataFormControl.doseValue',
        targetAreaSizeValueKey:
            'OrdersNewPage.areasDataFormControl.targetAreaSizeValue',
        trichogrammaRequirementValueKey:
            'OrdersNewPage.areasDataFormControl.trichogrammaRequirementValue',
        commentHeaderKey: 'OrdersNewPage.areasDataFormControl.commentHeader',
        missionHeaderKey: 'OrdersNewPage.areasDataFormControl.missionHeader',
        addButtonXVM: {
            icon: MatIcon.ADD,
            variant: 'ghost',
        },
        deleteButtonXVM: {
            icon: MatIcon.DELETE,
            secondary: true,
            variant: 'ghost',
        },
        editButtonXVM: {
            icon: MatIcon.EDIT,
            secondary: true,
            variant: 'ghost',
        },

        addAreaDataDialogVM: {
            requiredAssistiveTextKey:
                'OrdersNewPage.areasDataDialog.requiredAssistiveText',
            dosePerHqMinErrorAssistiveTextValueKey:
                'OrdersNewPage.areasDataDialog.dosePerHqMinErrorAssistiveTextValue',
            missionNameMaxCharactersAllowedAssistiveTextValueKey:
                'OrdersNewPage.areasDataDialog.missionNameMaxCharactersAllowedAssistiveTextValue',
            missionNameMaxCharactersCounterAssistiveTextValueKey:
                'OrdersNewPage.areasDataDialog.missionNameMaxCharactersCounterAssistiveTextValue',
            titleKey: 'OrdersNewPage.areasDataDialog.title.add',
            closeButtonXVM: {
                icon: MatIcon.CLOSE,
                secondary: true,
                variant: 'ghost',
            },
            cancelButtonXVM: {
                textKey: 'OrdersNewPage.areasDataDialog.cancelButtonText',
                secondary: true,
                variant: 'ghost',
            },
            commentInputTextareaXVM: {
                id: 'phoneNumber',
                readonly: false,
                labelKey: 'OrdersNewPage.areasDataDialog.commentLabel',
                placeholderKey:
                    'OrdersNewPage.areasDataDialog.commentPlaceholder',
            },
            missionNameInputTextXVM: {
                autocomplete: 'off',
                id: 'missionName',
                readonly: false,
                type: 'text',
                placeholderKey:
                    'OrdersNewPage.areasDataDialog.missionNamePlaceholder',
                labelKey: 'OrdersNewPage.areasDataDialog.missionNameLabel',
            },
            confirmButtonXVM: {
                textKey: 'OrdersNewPage.areasDataDialog.submitButtonText',
                variant: 'fill',
            },
            applicationDateInputTextXVM: {
                id: 'applicationDate',
                readonly: false,
                type: 'datetime-local',
                labelKey: 'OrdersNewPage.areasDataDialog.applicationDateLabel',
                placeholderKey:
                    'OrdersNewPage.areasDataDialog.applicationDatePlaceholder',
                autocomplete: 'email',
            },
            dosePerHqInputTextXVM: {
                id: 'dosePerHq',
                readonly: false,
                labelKey: 'OrdersNewPage.areasDataDialog.dosePerHqLabel',
                placeholderKey:
                    'OrdersNewPage.areasDataDialog.dosePerHqPlaceholder',
            },
            mapFormControlVM: {
                defaultCenter: null,
                mapSearchInputFormControlVM: {
                    distanceValueKey:
                        'OrdersNewPage.areasDataDialog.mapSearchInputFormControlVM.distanceValue',
                    placeholderKey:
                        'OrdersNewPage.areasDataDialog.mapSearchInputFormControlVM.placeholder',
                },
                mapAreaSelectFormControlVM: {
                    areaValueKey:
                        'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.areaValueKey',
                    addButtonXVM: {
                        variant: 'ghost',
                        textKey:
                            'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.addButtonText',
                    },
                    editButtonXVM: {
                        secondary: true,
                        variant: 'ghost',
                        textKey:
                            'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.editButtonText',
                    },
                    deleteButtonXVM: {
                        secondary: true,
                        variant: 'ghost',
                        textKey:
                            'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.deleteButtonText',
                    },
                    coordinatesInputTextareaXVM: {
                        id: 'coordinates',
                        placeholderKey:
                            'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.coordinatesPlaceholder',
                        readonly: false,
                        labelKey:
                            'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.coordinatesLabel',
                    },
                },
                mapPointSelectFormControlVM: {
                    addButtonXVM: {
                        variant: 'ghost',
                        textKey:
                            'OrdersNewPage.areasDataDialog.mapPointSelectFormControl.addButtonText',
                    },
                    deleteButtonXVM: {
                        secondary: true,
                        variant: 'ghost',
                        textKey:
                            'OrdersNewPage.areasDataDialog.mapPointSelectFormControl.deleteButtonText',
                    },
                },
            },
        },
        editAreaDataDialogVM: {
            requiredAssistiveTextKey:
                'OrdersNewPage.areasDataDialog.requiredAssistiveText',
            dosePerHqMinErrorAssistiveTextValueKey:
                'OrdersNewPage.areasDataDialog.dosePerHqMinErrorAssistiveTextValue',
            missionNameMaxCharactersAllowedAssistiveTextValueKey:
                'OrdersNewPage.areasDataDialog.missionNameMaxCharactersAllowedAssistiveTextValue',
            missionNameMaxCharactersCounterAssistiveTextValueKey:
                'OrdersNewPage.areasDataDialog.missionNameMaxCharactersCounterAssistiveTextValue',
            titleKey: 'OrdersNewPage.areasDataDialog.title.edit',
            closeButtonXVM: {
                icon: MatIcon.CLOSE,
                secondary: true,
                variant: 'ghost',
            },
            cancelButtonXVM: {
                textKey: 'OrdersNewPage.areasDataDialog.cancelButtonText',
                secondary: true,
                variant: 'ghost',
            },
            commentInputTextareaXVM: {
                id: 'phoneNumber',
                readonly: false,
                labelKey: 'OrdersNewPage.areasDataDialog.commentLabel',
                placeholderKey:
                    'OrdersNewPage.areasDataDialog.commentPlaceholder',
            },
            missionNameInputTextXVM: {
                autocomplete: 'off',
                id: 'missionName',
                readonly: false,
                type: 'text',
                placeholderKey:
                    'OrdersNewPage.areasDataDialog.missionNamePlaceholder',
                labelKey: 'OrdersNewPage.areasDataDialog.missionNameLabel',
            },
            confirmButtonXVM: {
                textKey: 'OrdersNewPage.areasDataDialog.submitButtonText',
                variant: 'fill',
            },
            applicationDateInputTextXVM: {
                id: 'applicationDate',
                readonly: false,
                type: 'datetime-local',
                labelKey: 'OrdersNewPage.areasDataDialog.applicationDateLabel',
                placeholderKey:
                    'OrdersNewPage.areasDataDialog.applicationDatePlaceholder',
                autocomplete: 'email',
            },
            dosePerHqInputTextXVM: {
                id: 'dosePerHq',
                readonly: false,
                labelKey: 'OrdersNewPage.areasDataDialog.dosePerHqLabel',
                placeholderKey:
                    'OrdersNewPage.areasDataDialog.dosePerHqPlaceholder',
            },
            mapFormControlVM: {
                defaultCenter: null,
                mapSearchInputFormControlVM: {
                    distanceValueKey:
                        'OrdersNewPage.areasDataDialog.mapSearchInputFormControlVM.distanceValue',
                    placeholderKey:
                        'OrdersNewPage.areasDataDialog.mapSearchInputFormControlVM.placeholder',
                },
                mapAreaSelectFormControlVM: {
                    areaValueKey:
                        'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.areaValueKey',
                    addButtonXVM: {
                        variant: 'ghost',
                        textKey:
                            'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.addButtonText',
                    },
                    editButtonXVM: {
                        secondary: true,
                        variant: 'ghost',
                        textKey:
                            'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.editButtonText',
                    },
                    deleteButtonXVM: {
                        secondary: true,
                        variant: 'ghost',
                        textKey:
                            'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.deleteButtonText',
                    },
                    coordinatesInputTextareaXVM: {
                        id: 'coordinates',
                        placeholderKey:
                            'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.coordinatesPlaceholder',
                        readonly: false,
                        labelKey:
                            'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.coordinatesLabel',
                    },
                },
                mapPointSelectFormControlVM: {
                    addButtonXVM: {
                        variant: 'ghost',
                        textKey:
                            'OrdersNewPage.areasDataDialog.mapPointSelectFormControl.addButtonText',
                    },
                    deleteButtonXVM: {
                        secondary: true,
                        variant: 'ghost',
                        textKey:
                            'OrdersNewPage.areasDataDialog.mapPointSelectFormControl.deleteButtonText',
                    },
                },
            },
        },
        confirmationDialogVM: {
            closeButtonXVM: {
                icon: MatIcon.CLOSE,
                secondary: true,
                variant: 'ghost',
            },
            titleKey: 'OrdersNewPage.deleteDialog.title',
            confirmTextKey: 'OrdersNewPage.deleteDialog.warningText',
            confirmButtonXVM: {
                textKey: 'OrdersNewPage.deleteDialog.submitButtonText',
                variant: 'fill',
            },
            cancelButtonXVM: {
                textKey: 'OrdersNewPage.deleteDialog.cancelButtonText',
                secondary: true,
                variant: 'ghost',
            },
        },
    },
};

export const enMock = {
    title: 'tit',
    submitButtonText: 'sub',
    emailLabel: 'email',
    emailPlaceholder: 'emailPlace',
    endCustomerLabel: 'endCustomer',
    endCustomerPlaceholder: 'endCustomerPlace',
    internalOrderNumberLabel: 'internal',
    internalOrderNumberPlaceholder: 'internalPlace',
    nameLabel: 'nameLab',
    namePlaceholder: 'namePlace',
    phoneNumberLabel: 'phoneNumber',
    phoneNumberPlaceholder: 'phoneNumberPlace',
    areasDataLabel: 'areasData',
    areasDataFormControl: {
        dosePerHqMinErrorAssistiveTextValue: 'dosePerHqMinErrorAssistiveText',
        missionNameMaxCharactersAllowedAssistiveTextValue:
            'missionNameMaxCharactersAllowedAssistiveText',
        missionNameMaxCharactersCounterAssistiveTextValue:
            'missionNameMaxCharactersCounterAssistiveText',
        requiredAssistiveText: 'requiredAssistiveText',
        missionNameLabel: 'mission',
        missionNamePlaceholder: 'missionPlace',
        commentLabel: 'comment',
        commentPlaceholder: 'commentPlace',
        closeButtonText: 'close',
        coordinatesLabel: 'coords',
        coordinatesPlaceholder: 'coordsPlace',
        cancelButtonText: 'cancelButton',
        submitButtonText: 'submit',
        applicationDateLabel: 'applicationDate',
        applicationDatePlaceholder: 'applicationDatePlace',
        dosePerHqLabel: 'dosePer',
        dosePerHqPlaceholder: 'dosePerPlace',
        entryPointLabel: 'entryPoint',
        targetAreaLabel: 'targetArea',
        mapFormControl: {
            mapSearchInputFormControl: {
                placeholder: 'place',
                distanceValue: 'distance',
            },
            mapAreaSelectFormControl: {
                addButtonText: 'addButton',
                deleteButtonText: 'deleteButton',
                areaValue: 'area',
                editButton: 'edit',
            },
            warning: 'warn',
            deleteButton: 'delete',
            cancelButton: 'cancel',
        },
        label: 'lab',
    },
    addButtonText: 'addButton',
    deleteButtonText: 'deleteButton',
    actionsHeader: 'actions',
    targetAreaSizeHeader: 'targetAreaSize',
    entryPointHeader: 'entryPoint',
    doseHeader: 'dose',
    applicationDateHeader: 'application',
    trichogrammaRequirementHeader: 'trichogrammaRequirement',
    distanceFromHeadOfficeHeader: 'distanceFromHeadOffice',
    totalDistanceFromHeadOfficeHeader: 'totalDistanceFromHeadOffice',
    totalTargetAreaSizeHeader: 'totalTargetAreaSize',
    totalTrichogrammaRequirementHeader: 'totalTrichogrammaRequirement',
    applicationDateValue: 'applicationDate',
    distanceFromHeadOfficeValue: 'distanceFromHeadOffice',
    doseValue: 'doseValue',
    targetAreaSizeValue: 'targetAreaSize',
    trichogrammaRequirementValue: 'trichogrammaRequirement',
    commentHeader: 'comment',
    missionHeader: 'mission',
    requiredAssistiveText: 'required',
};

export const ordersNewPageVMMock: OrdersNewPageVM = {
    titleKey: enMock.title,
    phoneNumberInputTextXVM: {
        id: 'id',
        autocomplete: 'email',
        labelKey: enMock.phoneNumberLabel,
        placeholderKey: enMock.phoneNumberPlaceholder,
        readonly: false,
        type: 'email',
    },
    submitButtonXVM: {
        variant: 'fill',
        secondary: false,
        textKey: enMock.submitButtonText,
    },
    requiredAssistiveTextKey: enMock.requiredAssistiveText,
    emailInputTextXVM: {
        id: 'id',
        readonly: false,
        type: 'email',
        autocomplete: 'email',
        labelKey: enMock.emailLabel,
        placeholderKey: enMock.emailPlaceholder,
    },
    endCustomerInputTextXVM: {
        id: 'id',
        readonly: false,
        type: 'email',
        autocomplete: 'email',
        labelKey: enMock.endCustomerLabel,
        placeholderKey: enMock.endCustomerPlaceholder,
    },
    internalOrderNumberInputTextXVM: {
        id: 'id',
        readonly: false,
        type: 'email',
        autocomplete: 'email',
        labelKey: enMock.internalOrderNumberLabel,
        placeholderKey: enMock.internalOrderNumberPlaceholder,
    },
    nameInputTextXVM: {
        id: 'id',
        readonly: false,
        type: 'email',
        autocomplete: 'email',
        labelKey: enMock.nameLabel,
        placeholderKey: enMock.namePlaceholder,
    },

    areasDataFormControlVM: {
        labelKey: enMock.areasDataFormControl.label,
        addButtonXVM: {
            icon: MatIcon.ADD,
            variant: 'fill',
        },
        editButtonXVM: {
            secondary: false,
            variant: 'ghost',
            icon: MatIcon.EDIT,
        },
        deleteButtonXVM: {
            secondary: false,
            variant: 'ghost',
            icon: MatIcon.DELETE,
        },

        addAreaDataDialogVM: {
            dosePerHqMinErrorAssistiveTextValueKey:
                enMock.areasDataFormControl.dosePerHqMinErrorAssistiveTextValue,
            missionNameMaxCharactersAllowedAssistiveTextValueKey:
                enMock.areasDataFormControl
                    .missionNameMaxCharactersAllowedAssistiveTextValue,
            missionNameMaxCharactersCounterAssistiveTextValueKey:
                enMock.areasDataFormControl
                    .missionNameMaxCharactersCounterAssistiveTextValue,
            requiredAssistiveTextKey:
                enMock.areasDataFormControl.requiredAssistiveText,
            dosePerHqInputTextXVM: {
                id: 'id',
                labelKey: enMock.areasDataFormControl.dosePerHqLabel,
                placeholderKey: enMock.areasDataFormControl.dosePerHqLabel,
                readonly: false,
            },
            missionNameInputTextXVM: {
                id: 'id',
                autocomplete: 'email',
                labelKey: enMock.areasDataFormControl.missionNameLabel,
                placeholderKey: enMock.areasDataFormControl.missionNameLabel,
                readonly: false,
                type: 'datetime-local',
            },
            commentInputTextareaXVM: {
                id: 'id',
                labelKey: enMock.areasDataFormControl.commentLabel,
                placeholderKey: enMock.areasDataFormControl.commentPlaceholder,
                readonly: false,
            },
            closeButtonXVM: {
                textKey: enMock.areasDataFormControl.closeButtonText,
                secondary: false,
                variant: 'fill',
            },
            applicationDateInputTextXVM: {
                id: 'id',
                autocomplete: 'email',
                labelKey: enMock.areasDataFormControl.applicationDateLabel,
                placeholderKey:
                    enMock.areasDataFormControl.applicationDatePlaceholder,
                readonly: false,
                type: 'email',
            },

            cancelButtonXVM: {
                textKey: enMock.areasDataFormControl.cancelButtonText,
                secondary: false,
                variant: 'fill',
            },
            confirmButtonXVM: {
                textKey: enMock.areasDataFormControl.cancelButtonText,
                secondary: false,
                variant: 'fill',
            },
            mapFormControlVM: {
                defaultCenter: null,
                mapSearchInputFormControlVM: {
                    placeholderKey:
                        enMock.areasDataFormControl.mapFormControl
                            .mapSearchInputFormControl.placeholder,
                    distanceValueKey:
                        enMock.areasDataFormControl.mapFormControl
                            .mapSearchInputFormControl.distanceValue,
                },
                mapAreaSelectFormControlVM: {
                    areaValueKey:
                        enMock.areasDataFormControl.mapFormControl
                            .mapAreaSelectFormControl.areaValue,
                    addButtonXVM: {
                        secondary: true,
                        variant: 'ghost',
                        textKey:
                            enMock.areasDataFormControl.mapFormControl
                                .mapAreaSelectFormControl.addButtonText,
                    },
                    editButtonXVM: {
                        secondary: true,
                        variant: 'ghost',
                        textKey:
                            enMock.areasDataFormControl.mapFormControl
                                .mapAreaSelectFormControl.deleteButtonText,
                    },
                    deleteButtonXVM: {
                        secondary: true,
                        variant: 'ghost',
                        textKey:
                            enMock.areasDataFormControl.mapFormControl
                                .mapAreaSelectFormControl.editButton,
                    },
                    coordinatesInputTextareaXVM: {
                        id: 'id',
                        placeholderKey:
                            enMock.areasDataFormControl.coordinatesPlaceholder,
                        labelKey: enMock.areasDataFormControl.coordinatesLabel,
                        readonly: false,
                    },
                },
                mapPointSelectFormControlVM: {
                    addButtonXVM: {
                        secondary: true,
                        variant: 'ghost',
                        textKey: enMock.addButtonText,
                    },
                    deleteButtonXVM: {
                        secondary: true,
                        variant: 'ghost',
                        textKey: enMock.deleteButtonText,
                    },
                },
            },
            titleKey: enMock.title,
        },

        editAreaDataDialogVM: {
            dosePerHqMinErrorAssistiveTextValueKey:
                enMock.areasDataFormControl.dosePerHqMinErrorAssistiveTextValue,
            missionNameMaxCharactersAllowedAssistiveTextValueKey:
                enMock.areasDataFormControl
                    .missionNameMaxCharactersAllowedAssistiveTextValue,
            missionNameMaxCharactersCounterAssistiveTextValueKey:
                enMock.areasDataFormControl
                    .missionNameMaxCharactersCounterAssistiveTextValue,
            requiredAssistiveTextKey:
                enMock.areasDataFormControl.requiredAssistiveText,
            dosePerHqInputTextXVM: {
                id: 'id',
                labelKey: enMock.areasDataFormControl.dosePerHqLabel,
                placeholderKey: enMock.areasDataFormControl.dosePerHqLabel,
                readonly: false,
            },
            missionNameInputTextXVM: {
                id: 'id',
                autocomplete: 'email',
                labelKey: enMock.areasDataFormControl.missionNameLabel,
                placeholderKey: enMock.areasDataFormControl.missionNameLabel,
                readonly: false,
                type: 'datetime-local',
            },
            commentInputTextareaXVM: {
                id: 'id',
                labelKey: enMock.areasDataFormControl.commentLabel,
                placeholderKey: enMock.areasDataFormControl.commentPlaceholder,
                readonly: false,
            },
            closeButtonXVM: {
                textKey: enMock.areasDataFormControl.closeButtonText,
                secondary: false,
                variant: 'fill',
            },
            applicationDateInputTextXVM: {
                id: 'id',
                autocomplete: 'email',
                labelKey: enMock.areasDataFormControl.applicationDateLabel,
                placeholderKey:
                    enMock.areasDataFormControl.applicationDatePlaceholder,
                readonly: false,
                type: 'email',
            },

            cancelButtonXVM: {
                textKey: enMock.areasDataFormControl.cancelButtonText,
                secondary: false,
                variant: 'fill',
            },
            confirmButtonXVM: {
                textKey: enMock.areasDataFormControl.cancelButtonText,
                secondary: false,
                variant: 'fill',
            },
            mapFormControlVM: {
                defaultCenter: null,
                mapSearchInputFormControlVM: {
                    placeholderKey:
                        enMock.areasDataFormControl.mapFormControl
                            .mapSearchInputFormControl.placeholder,
                    distanceValueKey:
                        enMock.areasDataFormControl.mapFormControl
                            .mapSearchInputFormControl.distanceValue,
                },
                mapAreaSelectFormControlVM: {
                    areaValueKey:
                        enMock.areasDataFormControl.mapFormControl
                            .mapAreaSelectFormControl.areaValue,
                    addButtonXVM: {
                        secondary: true,
                        variant: 'ghost',
                        textKey:
                            enMock.areasDataFormControl.mapFormControl
                                .mapAreaSelectFormControl.addButtonText,
                    },
                    editButtonXVM: {
                        secondary: true,
                        variant: 'ghost',
                        textKey:
                            enMock.areasDataFormControl.mapFormControl
                                .mapAreaSelectFormControl.deleteButtonText,
                    },
                    deleteButtonXVM: {
                        secondary: true,
                        variant: 'ghost',
                        textKey:
                            enMock.areasDataFormControl.mapFormControl
                                .mapAreaSelectFormControl.editButton,
                    },
                    coordinatesInputTextareaXVM: {
                        id: 'id',
                        placeholderKey:
                            enMock.areasDataFormControl.coordinatesPlaceholder,
                        labelKey: enMock.areasDataFormControl.coordinatesLabel,
                        readonly: false,
                    },
                },
                mapPointSelectFormControlVM: {
                    addButtonXVM: {
                        secondary: true,
                        variant: 'ghost',
                        textKey: enMock.addButtonText,
                    },
                    deleteButtonXVM: {
                        secondary: true,
                        variant: 'ghost',
                        textKey: enMock.deleteButtonText,
                    },
                },
            },
            titleKey: enMock.title,
        },

        confirmationDialogVM: {
            closeButtonXVM: {
                icon: MatIcon.CLOSE,
                secondary: true,
                variant: 'ghost',
            },
            titleKey: enMock.title,
            confirmTextKey: enMock.areasDataFormControl.mapFormControl.warning,
            cancelButtonXVM: {
                textKey:
                    enMock.areasDataFormControl.mapFormControl.cancelButton,
                secondary: false,
                variant: 'fill',
            },
            confirmButtonXVM: {
                textKey:
                    enMock.areasDataFormControl.mapFormControl.deleteButton,
                secondary: false,
                variant: 'fill',
            },
        },
        actionsHeaderKey: enMock.actionsHeader,
        targetAreaSizeHeaderKey: enMock.targetAreaSizeHeader,
        entryPointHeaderKey: enMock.entryPointHeader,
        doseHeaderKey: enMock.doseHeader,
        applicationDateHeaderKey: enMock.applicationDateHeader,
        trichogrammaRequirementHeaderKey: enMock.trichogrammaRequirementHeader,
        distanceFromHeadOfficeHeaderKey: enMock.distanceFromHeadOfficeHeader,
        totalDistanceFromHeadOfficeHeaderKey:
            enMock.totalDistanceFromHeadOfficeHeader,
        totalTargetAreaSizeHeaderKey: enMock.totalTargetAreaSizeHeader,
        totalTrichogrammaRequirementHeaderKey:
            enMock.totalTrichogrammaRequirementHeader,
        applicationDateValueKey: enMock.applicationDateHeader,
        distanceFromHeadOfficeValueKey: enMock.distanceFromHeadOfficeHeader,
        doseValueKey: enMock.doseValue,
        targetAreaSizeValueKey: enMock.targetAreaSizeValue,
        trichogrammaRequirementValueKey: enMock.trichogrammaRequirementValue,
        commentHeaderKey: enMock.commentHeader,
        missionHeaderKey: enMock.missionHeader,
    },
};
