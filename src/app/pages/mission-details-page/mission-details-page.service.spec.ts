import { TestBed } from '@angular/core/testing';

import { MissionDetailsPageService } from './mission-details-page.service';
import { provideMockAuthStore } from '@stores/auth/auth.testing';

describe('MissionDetailsPageService', () => {
    let service: MissionDetailsPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [provideMockAuthStore()] });
        service = TestBed.inject(MissionDetailsPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
