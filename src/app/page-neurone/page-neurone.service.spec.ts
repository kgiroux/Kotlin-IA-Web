import { TestBed, inject } from '@angular/core/testing';

import { PageNeuroneService } from './page-neurone.service';

describe('PageNeuroneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageNeuroneService]
    });
  });

  it('should be created', inject([PageNeuroneService], (service: PageNeuroneService) => {
    expect(service).toBeTruthy();
  }));
});
