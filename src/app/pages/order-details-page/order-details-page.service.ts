import { inject, Injectable } from '@angular/core';
import { OrderService } from '@services/order/order.service';
import { map, Observable } from 'rxjs';
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

    private readonly vm$: Observable<OrderDetailsPageVM> = this.order$.pipe(
        map((order) => ({
            ...this.config,
            headerXVM: {
                ...this.config.headerConfig,
                id: order.id,
                statusXVM: {
                    styles: mapOrderStatusToStatusToCSSStyles(order.status),
                    statusTextKey: mapOrderStatusToTranslocoTextKey(
                        order.status
                    ),
                },
                summaryXVMs: [
                    {
                        textKey: this.config.headerConfig.clientTextKey,
                        value: order.client.client,
                    },
                    {
                        textKey: this.config.headerConfig.createdDateTextKey,
                        value: {
                            key: this.config.headerConfig.createdDateValueKey,
                            params: { date: order.creationDate },
                        },
                    },
                    {
                        textKey: this.config.headerConfig.totalAreaTextKey,
                        value: {
                            key: this.config.headerConfig.totalAreaValueKey,
                            params: { area: order.totalAreaInHa },
                        },
                    },
                ],
            },
            sectionCardXVMs: [
                {
                    type: 'orderDetails',
                    titleKey:
                        this.config.sectionCardConfigs
                            .orderDetailsSectionCardConfig.titleKey,
                    infoPanelXVMs: [
                        {
                            titleKey:
                                this.config.sectionCardConfigs
                                    .orderDetailsSectionCardConfig
                                    .infoPanelConfig.clientInfoPanel.titleKey,
                            infoListXVM: {
                                infoItemXVMs: [
                                    {
                                        labelKey:
                                            this.config.sectionCardConfigs
                                                .orderDetailsSectionCardConfig
                                                .infoPanelConfig.clientInfoPanel
                                                .contactLabelKey,
                                        value: order.client.contact,
                                    },

                                    {
                                        labelKey:
                                            this.config.sectionCardConfigs
                                                .orderDetailsSectionCardConfig
                                                .infoPanelConfig.clientInfoPanel
                                                .emailLabelKey,
                                        value: order.client.email,
                                    },
                                    {
                                        labelKey:
                                            this.config.sectionCardConfigs
                                                .orderDetailsSectionCardConfig
                                                .infoPanelConfig.clientInfoPanel
                                                .phoneLabelKey,
                                        value: order.client.phone,
                                    },
                                    {
                                        labelKey:
                                            this.config.sectionCardConfigs
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
                                this.config.sectionCardConfigs
                                    .orderDetailsSectionCardConfig
                                    .infoPanelConfig.summaryInfoPanel.titleKey,
                            infoListXVM: {
                                infoItemXVMs: [
                                    {
                                        labelKey:
                                            this.config.sectionCardConfigs
                                                .orderDetailsSectionCardConfig
                                                .infoPanelConfig
                                                .summaryInfoPanel
                                                .treatmentLabelKey,
                                        value: order.summary.treatment,
                                    },
                                    {
                                        labelKey:
                                            this.config.sectionCardConfigs
                                                .orderDetailsSectionCardConfig
                                                .infoPanelConfig
                                                .summaryInfoPanel
                                                .averageDoseLabelKey,
                                        value: {
                                            key: this.config.sectionCardConfigs
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
                                            this.config.sectionCardConfigs
                                                .orderDetailsSectionCardConfig
                                                .infoPanelConfig
                                                .summaryInfoPanel
                                                .totalSupplyLabelKey,
                                        value: {
                                            key: this.config.sectionCardConfigs
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
                                            this.config.sectionCardConfigs
                                                .orderDetailsSectionCardConfig
                                                .infoPanelConfig
                                                .summaryInfoPanel
                                                .orderValueLabelKey,
                                        value: {
                                            key: this.config.sectionCardConfigs
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
