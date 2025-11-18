import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
/**
 * ClusterComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for structuring the items cluster via content projection.
 * - Manages the overall layout.
 *
 * Out-of-Scope:
 * - Contains no logic related to the behavior or data of the projected components.
 * - Not responsible for fetching or transforming data.
 *
 * Purpose (optional):
 * To provide a flexible and reusable cluster layout.
 */
@Component({
    selector: 'app-cluster',
    imports: [NgClass],
    templateUrl: './cluster.component.html',
})
export class ClusterComponent {
    public readonly gapX = input<Gap>('none');
    public readonly gapY = input<Gap>('none');
}

export type Gap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
