import { TestBed } from '@angular/core/testing';
import { GoogleMapsService } from './google-maps.service';
import { getTranslocoModule } from 'transloco-testing.module';

describe('GoogleMapsService', () => {
    let service: GoogleMapsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                getTranslocoModule({
                    langs: {},
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
        });
        service = TestBed.inject(GoogleMapsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
