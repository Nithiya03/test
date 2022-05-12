import { TestBed } from '@angular/core/testing';

import { ServiceService } from './service.service';

describe('ServiceService', () => {
  let service: ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('testing service title',()=>
  expect(service.serviceName).toBe('service')
  )
});

