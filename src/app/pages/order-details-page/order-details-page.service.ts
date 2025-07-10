import { inject, Injectable } from '@angular/core';
import { OrderService } from '@services/order/order.service';
import { combineLatest, map, Observable, of } from 'rxjs';
import {
    mapOrderStatusToStatusToCSSStyles,
    mapOrderStatusToTranslocoTextKey,
    OrderDetailsPageVM,
} from './order-details-page.model';
import { ORDER_DETAILS_PAGE_CONFIG } from './order-details-page.config';

@Injectable({
    providedIn: 'root',
})
export class OrderDetailsPageService {
    private readonly config = inject(ORDER_DETAILS_PAGE_CONFIG);
    private readonly orderService = inject(OrderService);
    private readonly order$ = this.orderService.getOrder();
    public getVM = () => this.vm$;

    private readonly vm$: Observable<OrderDetailsPageVM> = combineLatest([
        this.order$,
        of(this.config),
    ]).pipe(
        map(([order, config]) => ({
            ...this.config,
            headerXVM: {
                ...config.headerConfig,
                id: order.id,
                statusXVM: {
                    styles: mapOrderStatusToStatusToCSSStyles(order.status),
                    statusTextKey: mapOrderStatusToTranslocoTextKey(
                        order.status
                    ),
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
                    type: 'orderDetails',
                    titleKey:
                        config.sectionCardConfigs.orderDetailsSectionCardConfig
                            .titleKey,
                    infoPanelXVMs: [
                        {
                            titleKey:
                                config.sectionCardConfigs
                                    .orderDetailsSectionCardConfig
                                    .infoPanelConfig.clientInfoPanel.titleKey,
                            infoListXVM: {
                                infoItemXVMs: [
                                    {
                                        labelKey:
                                            config.sectionCardConfigs
                                                .orderDetailsSectionCardConfig
                                                .infoPanelConfig.clientInfoPanel
                                                .contactLabelKey,
                                        value: order.client.contact,
                                    },

                                    {
                                        labelKey:
                                            config.sectionCardConfigs
                                                .orderDetailsSectionCardConfig
                                                .infoPanelConfig.clientInfoPanel
                                                .emailLabelKey,
                                        value: order.client.email,
                                    },
                                    {
                                        labelKey:
                                            config.sectionCardConfigs
                                                .orderDetailsSectionCardConfig
                                                .infoPanelConfig.clientInfoPanel
                                                .phoneLabelKey,
                                        value: order.client.phone,
                                    },
                                    {
                                        labelKey:
                                            config.sectionCardConfigs
                                                .orderDetailsSectionCardConfig
                                                .infoPanelConfig.clientInfoPanel
                                                .addressLabelKey,
                                        value: order.client.address,
                                    },
                                ],
                            },
                        },
                        {
                            titleKey:
                                config.sectionCardConfigs
                                    .orderDetailsSectionCardConfig
                                    .infoPanelConfig.summaryInfoPanel.titleKey,
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
                                                dose: order.summary.averageDose,
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
                                                price: order.summary.orderValue,
                                            },
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
            ],
        }))
    );
}
