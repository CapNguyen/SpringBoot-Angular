import { TestBed } from '@angular/core/testing';

import { CheckAttendanceService } from './check-attendance.service';

describe('CheckAttendanceService', () => {
  let service: CheckAttendanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckAttendanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
