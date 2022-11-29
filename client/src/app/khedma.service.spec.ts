import { TestBed } from '@angular/core/testing';

import { KhedmaService } from './khedma.service';

describe('KhedmaService', () => {
  let service: KhedmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KhedmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
