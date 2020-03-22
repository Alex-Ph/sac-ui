import { TestBed } from '@angular/core/testing';

import { ManagetaskService } from './managetask.service';

describe('ManagetaskService', () => {
  let service: ManagetaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagetaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
