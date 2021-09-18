import { TestBed } from '@angular/core/testing';

import { ConfigurateFrontRoutesService } from './configurate-front-routes.service';

describe('ConfigurateFrontRoutesService', () => {
  let service: ConfigurateFrontRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigurateFrontRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
