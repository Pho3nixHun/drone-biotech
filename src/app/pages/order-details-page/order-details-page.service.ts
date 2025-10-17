import { computed, inject, Injectable } from '@angular/core';
import { orderDetailsPageVM } from './order-details-page.mock';
import { Message, OrderDetailsPageVM } from './order-details-page.model';
import { AuthStore } from '@stores/auth/auth.store';

@Injectable({
    providedIn: 'root',
})
export class OrderDetailsPageService {
    private readonly store = inject(AuthStore);
    private readonly user = this.store.user;

    private readonly vm = computed<OrderDetailsPageVM | undefined>(() => {
        const user = this.user();
        if (!user) return undefined;

        const status = orderDetailsPageVM.status;
        const addNewMissionEnabled =
            status !== 'closed' &&
            status !== 'done' &&
            ((user.role === 'customer' && status === 'new') ||
                user.role === 'office');

        const missionBounds =
            orderDetailsPageVM.overviewFrameXVM.gmpMapXVM.missions.reduce(
                (acc, polygon) => {
                    polygon.coordinates.forEach((c) => acc.extend(c));
                    return acc;
                },
                new google.maps.LatLngBounds()
            );

        const vm: OrderDetailsPageVM = {
            ...orderDetailsPageVM,
            headerXVM: {
                ...orderDetailsPageVM.headerXVM,
                addNewMissionEnabled,
            },
            actionsFrameXVM: {
                ...orderDetailsPageVM.actionsFrameXVM,
                closeOrderButtonHidden: status === 'closed',
                completionTemplateButtonHidden:
                    status !== 'closed' && status !== 'done',
            },
            user: {
                name: user.displayName,
                photoUrl: user.photoURL,
                role: user.role,
            },
            chatFrameXVM: {
                ...orderDetailsPageVM.chatFrameXVM,
                readonlyMessageControl: status === 'closed',
            },
            missionsFrameXVM: {
                ...orderDetailsPageVM.missionsFrameXVM,
                missionCardListXVM: {
                    ...orderDetailsPageVM.missionsFrameXVM.missionCardListXVM,
                    missionCardXVMs: [
                        ...orderDetailsPageVM.missionsFrameXVM.missionCardListXVM.missionCardXVMs.map(
                            (mission) => {
                                const bounds =
                                    mission.gmpMapXVM.polygon.coordinates.reduce(
                                        (acc, coords) => acc.extend(coords),
                                        new google.maps.LatLngBounds(
                                            mission.gmpMapXVM.entryPoint
                                        )
                                    );

                                return {
                                    ...mission,
                                    gmpMapXVM: {
                                        ...mission.gmpMapXVM,
                                        bounds,
                                    },
                                };
                            }
                        ),
                    ],
                },
            },
            overviewFrameXVM: {
                ...orderDetailsPageVM.overviewFrameXVM,
                gmpMapXVM: {
                    ...orderDetailsPageVM.overviewFrameXVM.gmpMapXVM,
                    bounds: missionBounds,
                },
            },
        };
        return vm;
    });

    public getVM() {
        return this.vm;
    }

    closeOrder() {
        // TODO: implement closing order
    }
    sendMessage(message: Message) {
        // TODO: implement sending message
        void message;
    }
}
