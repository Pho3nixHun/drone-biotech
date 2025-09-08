import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Component } from '@angular/core';
import { StatusComponent } from '@components/status/status.component';
import { SummaryListComponent } from '@components/summary-list/summary-list.component';
import { StatusVM } from '@components/status/status.model';
import { ButtonComponent } from '@components/button/button.component';

@Component({
    imports: [
        HeaderComponent,
        StatusComponent,
        SummaryListComponent,
        ButtonComponent,
    ],
    template: `
        <app-header
            ><h2>Title</h2>
            <app-status [vm]="vm">Status</app-status
            ><a href="">Should be projected</a
            ><app-summary-list></app-summary-list
        ></app-header>
    `,
})
class TestHostComponent {
    vm: StatusVM = {
        styles: 'text-blue-500',
    };
}

describe('HeaderComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    // Snapshot testing
    it('should render the template correctly', () => {
        // Arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
