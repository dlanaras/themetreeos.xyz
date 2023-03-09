import { TestBed } from '@angular/core/testing';

import { PageRepositoryService } from './page-repository.service';

describe('PageRepositoryService', () => {
  let service: PageRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
