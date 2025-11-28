import { computed, inject, Injectable, signal } from '@angular/core';
import { orderDetailsPageVM } from './order-details-page.mock';
import { Message, OrderDetailsPageVM } from './order-details-page.model';
import { AuthStore } from '@stores/auth/auth.store';

@Injectable({
    providedIn: 'root',
})
export class OrderDetailsPageService {
    private readonly store = inject(AuthStore);
    private readonly user = this.store.user;

    private readonly vm = signal(orderDetailsPageVM);

    private readonly computedVM = computed<OrderDetailsPageVM | undefined>(
        () => {
            const vm = this.vm();
            const user = this.user();
            if (!user) return undefined;

            const {
                headerXVM,
                actionsFrameXVM,
                status,
                overviewFrameXVM,
                chatFrameXVM,
                missionsFrameXVM,
            } = vm;
            const { closeOrderButtonXVM, completionTemplateButtonXVM } =
                actionsFrameXVM;

            const addNewMissionEnabled =
                status !== 'closed' &&
                status !== 'done' &&
                ((user.role === 'customer' && status === 'new') ||
                    user.role === 'office');

            const computedVM: OrderDetailsPageVM = {
                ...vm,
                headerXVM: {
                    ...headerXVM,
                    addNewMissionEnabled,
                },
                actionsFrameXVM: {
                    ...actionsFrameXVM,
                    closeOrderButtonXVM: {
                        ...closeOrderButtonXVM,
                        hidden: status === 'closed',
                    },
                    completionTemplateButtonXVM: {
                        ...completionTemplateButtonXVM,
                        hidden: !['done', 'closed'].includes(status),
                    },
                },
                user: {
                    name: user.displayName,
                    photoUrl: user.photoURL,
                    role: user.role,
                },
                chatFrameXVM: {
                    ...chatFrameXVM,
                    readonlyMessageControl: status === 'closed',
                },
                missionsFrameXVM: {
                    ...missionsFrameXVM,

                    missionCardXVMs: missionsFrameXVM.missionCardXVMs.map(
                        (mission) => {
                            const { entryPoint, polygon } = mission.gmpMapXVM;

                            return {
                                ...mission,
                                gmpMapXVM: {
                                    ...mission.gmpMapXVM,
                                    bounds: polygon.coordinates.reduce(
                                        (acc, coords) => acc.extend(coords),
                                        new google.maps.LatLngBounds(
                                            entryPoint.coordinates
                                        )
                                    ),
                                },
                            };
                        }
                    ),
                },
                overviewFrameXVM: {
                    ...overviewFrameXVM,
                    gmpMapXVM: {
                        ...overviewFrameXVM.gmpMapXVM,
                        bounds: overviewFrameXVM.gmpMapXVM.missions.reduce(
                            (acc, polygon) => {
                                for (const c of polygon.coordinates)
                                    acc.extend(c);
                                return acc;
                            },
                            new google.maps.LatLngBounds()
                        ),
                    },
                },
            };
            return computedVM;
        }
    );

    public getVM() {
        return this.computedVM;
    }

    closeOrder() {
        // TODO: implement closing order
    }
    sendMessage(message: Message) {
        // TODO: implement sending message
        void message;
    }
}
