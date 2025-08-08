import { TestBed } from '@angular/core/testing';

import { MissionDetailsPageService } from './mission-details-page.service';

describe('MissionDetailsPageService', () => {
  let service: MissionDetailsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissionDetailsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
