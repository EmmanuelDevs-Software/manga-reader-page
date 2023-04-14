import { TestBed } from '@angular/core/testing';

import { InitialLoadingService } from './initial-loading.service';

describe('InitialLoadingService', () => {
  let service: InitialLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitialLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
