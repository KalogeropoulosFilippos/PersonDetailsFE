import { TestBed } from '@angular/core/testing';

import { PersonDetailsInsertService } from './person-details-insert.service';

describe('PersonDetailsInsertService', () => {
  let service: PersonDetailsInsertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonDetailsInsertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
