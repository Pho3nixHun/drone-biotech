import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissionDetailsPageComponent } from './mission-details-page.component';

describe('MissionDetailsPageComponent', () => {
    let component: MissionDetailsPageComponent;
    let fixture: ComponentFixture<MissionDetailsPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MissionDetailsPageComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(MissionDetailsPageComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
