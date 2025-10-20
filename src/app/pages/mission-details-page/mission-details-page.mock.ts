import { PolygonColor } from '@directives/gmp-polygon-drawing/gmp-polygon-drawing.model';
import { MissionDetailsPageVM } from './mission-details-page.model';
import { MatIcon } from '@interfaces/mat-icon.enum';

export const missionDetailsPageVM: MissionDetailsPageVM = {
    dosePerHa: 1,
    scheduledDate: new Date(),
    headerXVM: {
        titleKey: 'MissionDetailsPage.header.title',
        statusBadgeXVM: {
            status: 'accepted',
            shape: 'rounded',
        },
        creationDateKeyValueXVM: {
            orientation: 'horizontal',
            keyXVM: {
                textKey: 'MissionDetailsPage.header.creationDate.keyText',
            },
            valueVM: {
                type: 'withKey',
                key: 'MissionDetailsPage.header.creationDate.value',
                params: { date: new Date() },
            },
        },
    },
    mapOverviewFrameXVM: {
        titleKey: 'MissionDetailsPage.overview.title',
        overviewStackXVM: {
            align: 'normal',
            gap: 'large',
            orientation: 'horizontal',
            keyValueXVMs: [],
        },
        openInGMButtonXVM: {
            secondary: true,
            variant: 'fill',
            textKey: 'MissionDetailsPage.overview.openInGMButton.text',
        },
        gmpMapXVM: {
            bounds: null,
            polygon: {
                colors: {
                    fillColor: PolygonColor.BLUE,
                    strokeColor: PolygonColor.BLUE,
                },
                coordinates: [
                    { lat: 47.2407, lng: 21.1866 },
                    { lat: 47.2397, lng: 21.1876 },
                    { lat: 47.2333, lng: 21.2 },
                    { lat: 47.2333, lng: 21.2 },
                ],
            },
            entryPoint: { coordinates: { lat: 47.2285, lng: 21.1952 } },
        },
    },
    missionDetailsFrameXVM: {
        titleKey: 'MissionDetailsPage.details.title',
        openUpdateMissionDialogButtonXVM: {
            textKey: 'MissionDetailsPage.details.updateMissionButton.text',
            variant: 'fill',
            updateMissionDialogVM: {
                requiredAssistiveTextKey:
                    'MissionDetailsPage.details.updateDialog.requiredText',
                minDosePerHaAssistiveTextKey:
                    'MissionDetailsPage.details.updateDialog.minDosePerHaAssistiveText',
                titleKey: 'MissionDetailsPage.details.updateDialog.title',
                closeButtonXVM: {
                    variant: 'ghost',
                    secondary: true,
                    icon: MatIcon.CLOSE,
                },
                dateInputTextXVM: {
                    id: 'missionDate',
                    autocomplete: 'off',
                    labelKey:
                        'MissionDetailsPage.details.updateDialog.dateInput.label',
                    placeholderKey:
                        'MissionDetailsPage.details.updateDialog.dateInput.placeholder',
                    type: 'datetime-local',
                    readonly: false,
                },
                dosePerHaInputTextXVM: {
                    id: 'dosePerHa',
                    labelKey:
                        'MissionDetailsPage.details.updateDialog.dosePerHaInput.label',
                    placeholderKey:
                        'MissionDetailsPage.details.updateDialog.dosePerHaInput.placeholder',
                    readonly: false,
                },
                confirmButtonXVM: {
                    variant: 'fill',
                    textKey:
                        'MissionDetailsPage.details.updateDialog.confirmButton.text',
                },
                cancelButtonXVM: {
                    variant: 'ghost',
                    textKey:
                        'MissionDetailsPage.details.updateDialog.cancelButton.text',
                    secondary: true,
                },
            },
        },
    },
};
