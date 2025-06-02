import { TestBed } from '@angular/core/testing';

import { MissionDetailsPageService } from './mission-details-page.service';
import { provideHttpClient } from '@angular/common/http';
import { provideMockHeadOfficeLocation } from '@providers/google-maps-provider';

describe('MissionDetailsPageService', () => {
    let service: MissionDetailsPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideHttpClient(), provideMockHeadOfficeLocation()],
        });
        service = TestBed.inject(MissionDetailsPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
