import { TestBed } from '@angular/core/testing';

import { TakeAttendanceService } from './take-attendance.service';

describe('TakeAttendanceService', () => {
  let service: TakeAttendanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakeAttendanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
