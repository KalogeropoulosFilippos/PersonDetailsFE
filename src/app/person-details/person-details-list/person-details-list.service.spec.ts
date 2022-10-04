import { TestBed } from '@angular/core/testing';

import { PersonDetailsListService } from './person-details-list.service';

describe('PersonDetailsListService', () => {
  let service: PersonDetailsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonDetailsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
