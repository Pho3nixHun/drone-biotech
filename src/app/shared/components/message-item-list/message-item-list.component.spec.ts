import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageItemListComponent } from './message-item-list.component';
import { Component } from '@angular/core';
import { MessageItemComponent } from '../message-item/message-item.component';

@Component({
    imports: [MessageItemListComponent, MessageItemComponent],
    template: `
        <app-message-item-list>
            <app-message-item></app-message-item>
            <app-message-item></app-message-item>
            <div>Should not be projected</div>
        </app-message-item-list>
    `,
})
class TestHostComponent {}

describe('MessageItemListComponent', () => {
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
    it('should project the content and render the template correctly', () => {
        // There is no need to arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
