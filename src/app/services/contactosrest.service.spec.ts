import { TestBed } from '@angular/core/testing';

import { ContactosrestService } from './contactosrest.service';

describe('ContactosrestService', () => {
  let service: ContactosrestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactosrestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
