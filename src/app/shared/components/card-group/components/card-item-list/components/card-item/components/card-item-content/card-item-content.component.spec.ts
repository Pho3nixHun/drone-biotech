import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemContentComponent } from './card-item-content.component';
import { KeyValueComponent } from '@components/key-value/key-value.component';
import { Component } from '@angular/core';
import { getTranslocoModule } from 'transloco-testing.module';

@Component({
    imports: [CardItemContentComponent, KeyValueComponent],
    template: `
        <app-card-item-content>
            <app-key-value [label]="'label'">Should be projected</app-key-value>
            <div>Should not be projected</div>
        </app-card-item-content>
    `,
})
class TestHostComponent {}

describe('CardItemContentComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TestHostComponent,
                getTranslocoModule({
                    langs: {},
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    // Snapshot testing
    it('should project the content and render the template correctly', () => {
        // There is no need to arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
