import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissionDetailsPageComponent } from './mission-details-page.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('MissionDetailsPageComponent', () => {
    let component: MissionDetailsPageComponent;
    let fixture: ComponentFixture<MissionDetailsPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MissionDetailsPageComponent],
            providers: [provideMockStore()],
        }).compileComponents();

        fixture = TestBed.createComponent(MissionDetailsPageComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
