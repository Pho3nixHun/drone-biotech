import { Rel } from '@interfaces/with-link.interface';
import { MissionDetailsPageVM } from './mission-details-page.model';

export const missionDetailsPageDefaultVM: MissionDetailsPageVM = {
    pageLayoutXVM: {
        titleKey: 'MissionDetailsPage.pageLayout.title',
        missionName: 'meglocsoljuk a kukoricát',
    },
    headerXVM: {
        creationDate: new Date(),
        creationDateLabelKey: 'MissionDetailsPage.header.creationDateLabel',
        creationDateValueKey: 'MissionDetailsPage.header.creationDateValue',
        openInMapsButtonXVM: {
            textKey: 'MissionDetailsPage.header.openInMapsButton.text',
            link: {
                href: 'https://www.google.com/maps?q=47.237,21.17827083349036',
                rel: [Rel.NoOpener, Rel.NoReferrer],
                target: '_blank',
            },
        },
        statusXVM: {
            textKey: 'MissionDetailsPage.header.status.text',
            style: '*:bg-green-500 *:text-white',
        },
    },
    mapFormControlXVM: {
        mapControl: {
            targetArea: [
                { lat: 47.23773203607438, lng: 21.17827083349036 },
                { lat: 47.23773203607438, lng: 21.188270833490357 },
                { lat: 47.24273203607437, lng: 21.188270833490357 },
                { lat: 47.24273203607437, lng: 21.17827083349036 },
            ],
            entryPoint: { lat: 47.237, lng: 21.17827083349036 },
        },
    },
};
