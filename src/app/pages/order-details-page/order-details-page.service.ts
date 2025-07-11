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
import { OrderService } from '@services/order/order.service';
import { ORDER_DETAILS_PAGE_CONFIG } from './order-details-page.config';
import {
    mapHeaderXVM,
    mapOrderActionsSectionCardXVM,
    mapOrderDetailsSectionCardXVM,
    mapRoleTranslocoTextKey,
    Message,
    MessageItemXVM,
    OrderDetailsPageVM,
    OrderStatus,
} from './order-details-page.model';
import { Store } from '@ngrx/store';
import { selectUserName } from '@stores/auth/auth.selector';
import { TranslocoService } from '@jsverse/transloco';

@Injectable({
    providedIn: 'root',
})
export class OrderDetailsPageService {
    private readonly store = inject(Store);
    private readonly config = inject(ORDER_DETAILS_PAGE_CONFIG);
    private readonly orderService = inject(OrderService);
    private readonly translocoService = inject(TranslocoService);

    private readonly userName$ = this.store.select(selectUserName);
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
        this.userName$,
        of(this.config),
    ]).pipe(
        map(
            ([
                order,
                status,
                addMissionButtonVisibility,
                closeOrderButtonIsDisabled,
                messages,
                userName,
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
                                .map<MessageItemXVM>((message) => ({
                                    ...message,
                                    avatarXVM: {
                                        cssStyles:
                                            userName &&
                                            message.senderName.includes(
                                                userName
                                            )
                                                ? 'bg-green-100 text-green-400'
                                                : 'bg-blue-100 text-blue-400',
                                        initial: message.senderName.charAt(0),
                                    },
                                    sender: `${this.translocoService.translate(mapRoleTranslocoTextKey(message.role))} - ${message.senderName}`,
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
