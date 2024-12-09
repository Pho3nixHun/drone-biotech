import { TestBed } from '@angular/core/testing';

import { MapsConfigService } from './maps-config.service';
import {
    provideMockDrawingControlOptions,
    provideMockMapOptions,
    provideMockPolygonOptions,
} from './maps-config-vm.model';

describe('MapsConfigService', () => {
    let service: MapsConfigService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideMockDrawingControlOptions(),
                provideMockMapOptions(),
                provideMockPolygonOptions(),
            ],
        });
        service = TestBed.inject(MapsConfigService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
