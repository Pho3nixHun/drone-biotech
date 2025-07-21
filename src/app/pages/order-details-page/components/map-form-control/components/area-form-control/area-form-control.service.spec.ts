import { TestBed } from '@angular/core/testing';

import { AreaFormControlService } from './area-form-control.service';
import {
    provideActiveMissionPolygonOptions,
    provideCompletedMissionPolygonOptions,
} from 'src/app/shared/providers/google-maps-provider';

describe('AreaFormControlService', () => {
    let service: AreaFormControlService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideActiveMissionPolygonOptions(),
                provideCompletedMissionPolygonOptions(),
            ],
        });
        service = TestBed.inject(AreaFormControlService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
