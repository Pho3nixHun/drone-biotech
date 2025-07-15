import { OrderService } from '@services/order/order.service';
import { ORDER_DETAILS_PAGE_CONFIG } from './order-details-page.config';
import { inject, Injectable } from '@angular/core';
import {
    combineLatest,
    concat,
    map,
    merge,
    Observable,
    of,
    scan,
    Subject,
} from 'rxjs';
import {
    Message,
    OrderDetailsPageVM,
    OrderStatus,
} from './order-details-page.model';
import {
    mapHeaderXVM,
    mapOrderDetailsSectionCardXVM,
    mapOrderActionsSectionCardXVM,
    mapRoleTranslocoTextKey,
} from './order-details-page.mapper';
import { mapAvatarXVM } from '@components/avatar/avatar.model';
import { TranslocoService } from '@jsverse/transloco';

@Injectable({
    providedIn: 'root',
})
export class OrderDetailsPageService {
    private readonly config = inject(ORDER_DETAILS_PAGE_CONFIG);
    private readonly orderService = inject(OrderService);
    private readonly translocoService = inject(TranslocoService);

    private readonly order$ = this.orderService.getOrder();
    private readonly statusSubject = new Subject<OrderStatus>();
    private readonly messagesSubject = new Subject<Message>();

    private readonly status$ = concat(
        this.order$.pipe(map((order) => order.status)),
        this.statusSubject
    );

    private readonly addMissionButtonVisibility$ = this.status$.pipe(
        map((status) => status !== 'completed')
    );

    private readonly closeOrderButtonIsDisabled$ = this.status$.pipe(
        map((status) => status === 'completed')
    );

    private readonly messages$: Observable<Message[]> = merge(
        this.order$.pipe(
            map((order) =>
                order.messages.map((message) => ({
                    ...message,
                    senderName: message.sender,
                }))
            )
        ),
        this.messagesSubject.pipe(map((message) => [message]))
    ).pipe(scan((acc, curr) => [...acc, ...curr]));

    public getVM() {
        return this.vm$;
    }

    public closeOrder() {
        this.statusSubject.next('completed');
    }

    public sendMessage(message: Message) {
        this.messagesSubject.next(message);
    }

    private readonly vm$: Observable<OrderDetailsPageVM> = combineLatest([
        this.order$,
        this.status$,
        this.addMissionButtonVisibility$,
        this.closeOrderButtonIsDisabled$,
        this.messages$,
        of(this.config),
    ]).pipe(
        map(
            ([
                order,
                status,
                addMissionButtonVisibility,
                closeOrderButtonIsDisabled,
                messages,
                config,
            ]) => ({
                ...config,
                headerXVM: mapHeaderXVM(
                    config,
                    order,
                    status,
                    addMissionButtonVisibility
                ),
                sectionCardXVMs: [
                    mapOrderDetailsSectionCardXVM(config, order),
                    mapOrderActionsSectionCardXVM(
                        config,
                        closeOrderButtonIsDisabled
                    ),
                    {
                        type: 'messages',
                        buttonTextKey:
                            config.sectionCardConfigs.messagesSectionCardConfig
                                .buttonTextKey,
                        titleKey:
                            config.sectionCardConfigs.messagesSectionCardConfig
                                .titleKey,
                        messageItemListXVM: {
                            messageItemXVMs: messages
                                .map((message) => ({
                                    ...message,
                                    avatarXVM: mapAvatarXVM(message.sender),
                                    sender: `${this.translocoService.translate(mapRoleTranslocoTextKey(message.sender.role))} - ${message.sender.name}`,
                                    sendingDateValueKey:
                                        config.sectionCardConfigs
                                            .messagesSectionCardConfig
                                            .dateValueKey,
                                }))
                                .sort(
                                    (a, b) =>
                                        b.sendingDate.getSeconds() -
                                        a.sendingDate.getSeconds()
                                ),
                        },
                    },
                ],
            })
        )
    );
}
