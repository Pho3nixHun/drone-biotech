import { computed, inject, Injectable, resource } from '@angular/core';
import { missionDetailsPageVM } from './mission-details-page.mock';
import {
    MapOverviewFrameXVM,
    MissionDetailsPageVM,
} from './mission-details-page.model';
import { ReverseGeocodingService } from '@services/reverse-geocoding/reverse-geocoding.service';
import { getAreaOfPolygon } from 'geolib';
import { SQUARE_METRES_TO_HECTARE } from '@stores/location/location.model';
import { KeyValueXVM } from '../order-details-page/key-value/key-value.component';

@Injectable({
    providedIn: 'root',
})
export class MissionDetailsPageService {
    private readonly baseUrl = 'https://www.google.com/maps?q=';

    private readonly rgs = inject(ReverseGeocodingService);

    private readonly location = resource({
        params: () =>
            missionDetailsPageVM.mapOverviewFrameXVM.gmpMapXVM.entryPoint,
        loader: ({ params }) =>
            this.rgs.getAddressByCoordinates(params.coordinates),
    });

    private readonly mapOverviewFrameXVM = computed<MapOverviewFrameXVM>(() => {
        const { mapOverviewFrameXVM } = missionDetailsPageVM;
        const { gmpMapXVM, overviewStackXVM } = mapOverviewFrameXVM;
        const { coordinates } = gmpMapXVM.entryPoint;
        const address = this.location.value();
        const areaSizeInHa =
            getAreaOfPolygon(gmpMapXVM.polygon.coordinates) /
            SQUARE_METRES_TO_HECTARE;
        const bounds = gmpMapXVM.polygon.coordinates.reduce(
            (b, c) => b.extend(c),
            new google.maps.LatLngBounds(coordinates)
        );
        const keyValueXVMs: KeyValueXVM[] = [
            {
                orientation: 'horizontal',
                keyXVM: {
                    textKey: 'MissionDetailsPage.overview.areaSize.text',
                },
                valueVM: {
                    type: 'withKey',
                    key: 'MissionDetailsPage.overview.areaSize.value',
                    params: { area: areaSizeInHa },
                },
            },
        ];

        if (address) {
            keyValueXVMs.push({
                orientation: 'horizontal',
                keyXVM: {
                    textKey: 'MissionDetailsPage.overview.address.text',
                },
                valueVM: {
                    type: 'withoutKey',
                    value: address,
                },
            });
        }

        return {
            ...mapOverviewFrameXVM,
            openInGMButtonXVM: {
                ...mapOverviewFrameXVM.openInGMButtonXVM,
                link: {
                    href: `${this.baseUrl}${coordinates.lat},${coordinates.lng}`,
                },
            },
            gmpMapXVM: {
                ...gmpMapXVM,
                bounds,
            },
            overviewStackXVM: {
                ...overviewStackXVM,
                keyValueXVMs,
            },
        };
    });

    private readonly vm = computed<MissionDetailsPageVM | null>(() => {
        const mapOverviewFrameXVM = this.mapOverviewFrameXVM();
        return {
            ...missionDetailsPageVM,
            mapOverviewFrameXVM: {
                ...mapOverviewFrameXVM,
            },
        };
    });

    public getVM() {
        return this.vm;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public updateMission(mission: { dosePerHa: number; scheduledDate: Date }) {
        //TODO
    }
}
