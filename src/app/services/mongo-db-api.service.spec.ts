import { TestBed } from '@angular/core/testing';

import { MongoDBApiService } from './mongo-db-api.service';

describe('MongoDBApiService', () => {
  let service: MongoDBApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MongoDBApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
