import { computed, inject, Injectable, signal, Signal } from '@angular/core';
import { missionDetailsPageDefaultVM as vm } from './mission-details-page.mock';
import { getAreaOfPolygon } from 'geolib';
import { rxResource } from '@angular/core/rxjs-interop';
import { DistanceService } from '@services/distance/distance.service';
import { map } from 'rxjs';
import { isString } from '@utils/is-string.typeguard';
import { MissionStatusType } from './components/mission-header/components/mission-status/mission-status.model';
import {
    METRES_TO_KILOMETERS,
    SQUARE_METRES_TO_HECTARE,
} from '@stores/location/location.model';
import {
    DetailsItemXVM,
    MessageItemXVM,
    MissionData,
    MissionDetailsPageVM,
    Role,
} from './mission-details-page.model';

@Injectable({
    providedIn: 'root',
})
export class MissionDetailsPageService {
    private readonly distanceService = inject(DistanceService);
    public getVM(): Signal<MissionDetailsPageVM> {
        return this.computedVM;
    }

    public sendMessage(item: MessageItemXVM) {
        this.messagesSignal.set(
            [item, ...this.messagesSignal()].sort(
                (a, b) => b.date.getTime() - a.date.getTime()
            )
        );
    }

    private readonly computedVM = computed<MissionDetailsPageVM>(() => {
        const data = this.areaDataSignal();
        const messageItemXVMs = this.messagesSignal();
        const role = this.roleSignal();
        const status = this.statusSignal();

        const pageVM: MissionDetailsPageVM = {
            ...vm,
            role,
            detailsGridItemVM: {
                ...vm.detailsGridItemVM,
                detailsItemXVMs: this.missionDetailItemXVMs(),
            },
            missionDataXVM: {
                applicationDate:
                    data?.applicationDate ?? vm.missionDataXVM.applicationDate,
                createdDate: vm.missionDataXVM.createdDate,
                missionStatusType: status,
                dosePerHa: data?.dosePerHa ?? vm.missionDataXVM.dosePerHa,
                entryPoint: data?.entryPoint ?? vm.missionDataXVM.entryPoint,
                targetArea: data?.targetArea ?? vm.missionDataXVM.targetArea,
                comment: data?.comment ?? vm.missionDataXVM.comment,
                missionName: data?.missionName ?? vm.missionDataXVM.missionName,
            },
            navigateButtonVM: {
                ...vm.navigateButtonVM,
                link: {
                    ...vm.navigateButtonVM,
                    href: `${vm.navigateButtonVM.link.href}${vm.missionDataXVM.entryPoint.lat},${vm.missionDataXVM.entryPoint.lng}`,
                },
            },
            messagesGridItemVM: {
                ...vm.messagesGridItemVM,
                messageItemXVMs,
            },
        };
        return pageVM;
    });

    private readonly statusSignal = signal<MissionStatusType>(
        vm.missionDataXVM.missionStatusType
    );
    private readonly roleSignal = signal<Role>(vm.role);
    private readonly areaDataSignal = signal<MissionData | null>(null);
    private readonly messagesSignal = signal<MessageItemXVM[]>(
        vm.messagesGridItemVM.messageItemXVMs
    );

    private readonly distanceInKmFromOffice = rxResource({
        request: () => vm.missionDataXVM.entryPoint,
        loader: ({ request }) =>
            this.distanceService
                .getDistance(request)
                .pipe(map((data) => data / METRES_TO_KILOMETERS)),
        defaultValue: 0,
    });

    protected readonly missionDetails = computed<{
        totalDose: number;
        targetAreaSizeInHa: number;
        distanceInKm: number;
        applicationDate: Date;
    }>(() => {
        const targetAreaSizeInHa =
            getAreaOfPolygon(vm.missionDataXVM.targetArea) /
            SQUARE_METRES_TO_HECTARE;

        return {
            targetAreaSizeInHa,
            totalDose: targetAreaSizeInHa * vm.missionDataXVM.dosePerHa,
            distanceInKm: this.distanceInKmFromOffice.value(),
            applicationDate: vm.missionDataXVM.applicationDate,
        };
    });

    private readonly missionDetailItemXVMs = computed<DetailsItemXVM[]>(() => {
        const details = this.missionDetails();
        return vm.detailsGridItemVM.detailsItemXVMs.map((item) => {
            if (!isString(item.value)) {
                const updatedParams = { ...item.value.params };
                switch (item.type) {
                    case 'area': {
                        updatedParams['count'] = details.targetAreaSizeInHa;
                        break;
                    }
                    case 'date': {
                        updatedParams['date'] = details.applicationDate;
                        break;
                    }
                    case 'distance': {
                        updatedParams['count'] = details.distanceInKm;
                        break;
                    }
                    case 'dose': {
                        updatedParams['count'] = details.totalDose;
                        break;
                    }
                }

                return {
                    ...item,
                    value: {
                        ...item.value,
                        params: updatedParams,
                    },
                };
            }
            return {
                ...item,
                value: vm.missionDataXVM.comment,
            };
        });
    });
}
