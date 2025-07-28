import { TestBed } from '@angular/core/testing';

import { ProductoServicioService} from './producto-servicio.service';

describe('ProductoService', () => {
  let service: ProductoServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
