import { inject, Injectable } from '@angular/core';
import { combineLatest, concat, map, Observable, of, Subject } from 'rxjs';
import { OrderService } from '@services/order/order.service';
import { ORDER_DETAILS_PAGE_CONFIG } from './order-details-page.config';
import {
    mapOrderStatusToStatusToCSSStyles,
    mapOrderStatusToTranslocoTextKey,
    OrderDetailsPageVM,
    OrderStatus,
} from './order-details-page.model';

@Injectable({
    providedIn: 'root',
})
export class OrderDetailsPageService {
    private readonly config = inject(ORDER_DETAILS_PAGE_CONFIG);
    private readonly orderService = inject(OrderService);
    private readonly order$ = this.orderService.getOrder();
    private readonly statusSubject = new Subject<OrderStatus>();

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

    public getVM() {
        return this.vm$;
    }

    public closeOrder() {
        this.statusSubject.next('completed');
    }

    private readonly vm$: Observable<OrderDetailsPageVM> = combineLatest([
        this.order$,
        this.status$,
        this.addMissionButtonVisibility$,
        this.closeOrderButtonIsDisabled$,
        of(this.config),
    ]).pipe(
        map(
            ([
                order,
                status,
                addMissionButtonVisibility,
                closeOrderButtonIsDisabled,
                config,
            ]) => ({
                ...config,
                headerXVM: {
                    ...config.headerConfig,
                    addMissionButtonXVM: {
                        isVisible: addMissionButtonVisibility,
                        textKey:
                            config.headerConfig.addMissionButtonXVM.textKey,
                    },
                    id: order.id,
                    statusXVM: {
                        styles: mapOrderStatusToStatusToCSSStyles(status),
                        statusTextKey: mapOrderStatusToTranslocoTextKey(status),
                    },
                    summaryXVMs: [
                        {
                            textKey: config.headerConfig.clientTextKey,
                            value: order.client.client,
                        },
                        {
                            textKey: config.headerConfig.createdDateTextKey,
                            value: {
                                key: config.headerConfig.createdDateValueKey,
                                params: { date: order.creationDate },
                            },
                        },
                        {
                            textKey: config.headerConfig.totalAreaTextKey,
                            value: {
                                key: config.headerConfig.totalAreaValueKey,
                                params: { area: order.totalAreaInHa },
                            },
                        },
                    ],
                },
                sectionCardXVMs: [
                    {
                        ...config.sectionCardConfigs
                            .orderDetailsSectionCardConfig,
                        infoPanelXVMs: [
                            {
                                ...config.sectionCardConfigs
                                    .orderDetailsSectionCardConfig
                                    .infoPanelConfig.clientInfoPanel,
                                infoListXVM: {
                                    infoItemXVMs: [
                                        {
                                            labelKey:
                                                config.sectionCardConfigs
                                                    .orderDetailsSectionCardConfig
                                                    .infoPanelConfig
                                                    .clientInfoPanel
                                                    .contactLabelKey,
                                            value: order.client.contact,
                                        },
                                        {
                                            labelKey:
                                                config.sectionCardConfigs
                                                    .orderDetailsSectionCardConfig
                                                    .infoPanelConfig
                                                    .clientInfoPanel
                                                    .emailLabelKey,
                                            value: order.client.email,
                                        },
                                        {
                                            labelKey:
                                                config.sectionCardConfigs
                                                    .orderDetailsSectionCardConfig
                                                    .infoPanelConfig
                                                    .clientInfoPanel
                                                    .phoneLabelKey,
                                            value: order.client.phone,
                                        },
                                        {
                                            labelKey:
                                                config.sectionCardConfigs
                                                    .orderDetailsSectionCardConfig
                                                    .infoPanelConfig
                                                    .clientInfoPanel
                                                    .addressLabelKey,
                                            value: order.client.address,
                                        },
                                    ],
                                },
                            },
                            {
                                ...config.sectionCardConfigs
                                    .orderDetailsSectionCardConfig
                                    .infoPanelConfig.summaryInfoPanel,
                                infoListXVM: {
                                    infoItemXVMs: [
                                        {
                                            labelKey:
                                                config.sectionCardConfigs
                                                    .orderDetailsSectionCardConfig
                                                    .infoPanelConfig
                                                    .summaryInfoPanel
                                                    .treatmentLabelKey,
                                            value: order.summary.treatment,
                                        },
                                        {
                                            labelKey:
                                                config.sectionCardConfigs
                                                    .orderDetailsSectionCardConfig
                                                    .infoPanelConfig
                                                    .summaryInfoPanel
                                                    .averageDoseLabelKey,
                                            value: {
                                                key: config.sectionCardConfigs
                                                    .orderDetailsSectionCardConfig
                                                    .infoPanelConfig
                                                    .summaryInfoPanel
                                                    .averageDoseValueKey,
                                                params: {
                                                    dose: order.summary
                                                        .averageDose,
                                                },
                                            },
                                        },
                                        {
                                            labelKey:
                                                config.sectionCardConfigs
                                                    .orderDetailsSectionCardConfig
                                                    .infoPanelConfig
                                                    .summaryInfoPanel
                                                    .totalSupplyLabelKey,
                                            value: {
                                                key: config.sectionCardConfigs
                                                    .orderDetailsSectionCardConfig
                                                    .infoPanelConfig
                                                    .summaryInfoPanel
                                                    .totalSupplyValueKey,
                                                params: {
                                                    amount: order.summary
                                                        .totalSupply,
                                                },
                                            },
                                        },
                                        {
                                            labelKey:
                                                config.sectionCardConfigs
                                                    .orderDetailsSectionCardConfig
                                                    .infoPanelConfig
                                                    .summaryInfoPanel
                                                    .orderValueLabelKey,
                                            value: {
                                                key: config.sectionCardConfigs
                                                    .orderDetailsSectionCardConfig
                                                    .infoPanelConfig
                                                    .summaryInfoPanel
                                                    .orderValueValueKey,
                                                params: {
                                                    price: order.summary
                                                        .orderValue,
                                                },
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                    {
                        ...config.sectionCardConfigs
                            .orderActionsSectionCardConfig,
                        closeOrderButtonXVM: {
                            ...config.sectionCardConfigs
                                .orderActionsSectionCardConfig
                                .closeOrderButtonXVM,
                            isDisabled: closeOrderButtonIsDisabled,
                        },
                    },
                ],
            })
        )
    );
}
