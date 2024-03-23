import { TestBed } from '@angular/core/testing';

import { ServiciosGifsService } from './servicios-gifs.service';

describe('ServiciosGifsService', () => {
  let service: ServiciosGifsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosGifsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
