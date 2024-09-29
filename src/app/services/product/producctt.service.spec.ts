import { TestBed } from '@angular/core/testing';

import { ProduccttService } from './producctt.service';

describe('ProduccttService', () => {
  let service: ProduccttService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduccttService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
