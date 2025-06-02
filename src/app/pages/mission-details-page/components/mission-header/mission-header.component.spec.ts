import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissionHeaderComponent } from './mission-header.component';
import { Component } from '@angular/core';
import { MissionStatusComponent } from './components/mission-status/mission-status.component';

@Component({
    imports: [MissionHeaderComponent, MissionStatusComponent],
    template: `
        <app-mission-header>
            <app-mission-status></app-mission-status>
            <p>Should be projected</p>
            <a href="">Should be projected</a>
            <div href="">Should not be projected</div>
        </app-mission-header>
    `,
})
class TestHostComponent {}

describe('MissionHeaderComponent', () => {
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
