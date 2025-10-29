import { computed, inject, Injectable, resource, signal } from '@angular/core';
import { missionDetailsPageVM } from './mission-details-page.mock';
import {
    HeaderXVM,
    MapOverviewFrameXVM,
    Message,
    MissionDetailsPageVM,
} from './mission-details-page.model';
import { ReverseGeocodingService } from '@services/reverse-geocoding/reverse-geocoding.service';
import { getAreaOfPolygon } from 'geolib';
import { SQUARE_METRES_TO_HECTARE } from '@stores/location/location.model';
import { KeyValueXVM } from '../order-details-page/key-value/key-value.component';
import { AuthStore } from '@stores/auth/auth.store';
import { mapStoreUserToUser } from './mission-details-page.mapper';

@Injectable({
    providedIn: 'root',
})
export class MissionDetailsPageService {
    private readonly baseUrl = 'https://www.google.com/maps?q=';
    private readonly authStore = inject(AuthStore);
    private readonly vm = signal<MissionDetailsPageVM>(missionDetailsPageVM);

    private readonly rgs = inject(ReverseGeocodingService);

    private readonly location = resource({
        params: () => this.vm().mapOverviewFrameXVM.gmpMapXVM.entryPoint,
        loader: ({ params }) =>
            this.rgs.getAddressByCoordinates(params.coordinates),
    });

    private readonly mapOverviewFrameXVM = computed<MapOverviewFrameXVM>(() => {
        const { mapOverviewFrameXVM } = this.vm();
        const { gmpMapXVM, overviewStackXVM } = mapOverviewFrameXVM;
        const entryPointCoordinates = gmpMapXVM.entryPoint.coordinates;
        const targetAreaCoordinates = gmpMapXVM.polygon.coordinates;
        const address = this.location.value();
        const areaSizeInHa =
            getAreaOfPolygon(targetAreaCoordinates) / SQUARE_METRES_TO_HECTARE;
        const bounds = targetAreaCoordinates.reduce(
            (b, c) => b.extend(c),
            new google.maps.LatLngBounds(entryPointCoordinates)
        );
        const href = `${this.baseUrl}${entryPointCoordinates.lat},${entryPointCoordinates.lng}`;
        const keyValueXVMs: KeyValueXVM[] = [
            {
                orientation: 'horizontal',
                gap: 'small',
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
                gap: 'small',
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
                    href,
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

    private readonly headerXVM = computed<HeaderXVM>(() => {
        const { headerXVM, status } = this.vm();
        const { dialogActions } = headerXVM;
        const user = this.authStore.user();

        return {
            ...headerXVM,
            dialogActions: dialogActions.filter((action) =>
                action.accessConditions.some(
                    (access) =>
                        access.role === user?.role && access.status === status
                )
            ),
        };
    });

    private readonly computedVM = computed<MissionDetailsPageVM | null>(() => {
        const vm = this.vm();
        const user = this.authStore.user();
        const mapOverviewFrameXVM = this.mapOverviewFrameXVM();
        const headerXVM = this.headerXVM();
        return user
            ? {
                  ...vm,
                  user: mapStoreUserToUser(user),
                  mapOverviewFrameXVM,
                  headerXVM,
              }
            : null;
    });

    public getVM() {
        return this.computedVM;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public updateMission(_: { dosePerHa: number; scheduledDate: Date }) {
        //TODO
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public sendMessage(_: Message) {
        // TODO
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public cancelMission(_: string | null) {
        //TODO
    }
}
