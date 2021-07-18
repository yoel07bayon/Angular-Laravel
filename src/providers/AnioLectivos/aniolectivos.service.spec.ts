import { TestBed } from '@angular/core/testing';

import { AniolectivosService } from './aniolectivos.service';

describe('AniolectivosService', () => {
  let service: AniolectivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AniolectivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
