import { TestBed, inject } from '@angular/core/testing';

import { CricService } from './cric.service';

describe('CricService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CricService]
    });
  });

  it('should ...', inject([CricService], (service: CricService) => {
    expect(service).toBeTruthy();
  }));
});
