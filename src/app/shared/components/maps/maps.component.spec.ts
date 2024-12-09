import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsComponent } from './maps.component';
import { getTranslocoModule } from 'transloco-testing.module';

describe('MapsComponent', () => {
    let component: MapsComponent;
    let fixture: ComponentFixture<MapsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MapsComponent,
                getTranslocoModule({
                    langs: {},
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(MapsComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
