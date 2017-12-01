import { TestBed, inject } from '@angular/core/testing';

import { New1sService } from './new1s.service';

describe('New1sService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [New1sService]
    });
  });

  it('should be created', inject([New1sService], (service: New1sService) => {
    expect(service).toBeTruthy();
  }));
});
