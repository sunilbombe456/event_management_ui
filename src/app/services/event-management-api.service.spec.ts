import { TestBed } from '@angular/core/testing';

import { EventManagementApiService } from './event-management-api.service';

describe('EventManagementApiService', () => {
  let service: EventManagementApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventManagementApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
