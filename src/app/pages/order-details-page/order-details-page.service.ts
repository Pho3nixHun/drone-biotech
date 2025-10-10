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

        return {
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
                                    new google.maps.LatLngBounds().extend(
                                        mission.gmpMapXVM.entryPoint
                                    );
                                mission.gmpMapXVM.coordinates.forEach(
                                    (coords) => bounds.extend(coords)
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
        };
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
