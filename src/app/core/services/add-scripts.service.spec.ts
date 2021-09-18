import { TestBed } from '@angular/core/testing';

import { AddScriptsService } from './add-scripts.service';

describe('AddScriptsService', () => {
  let service: AddScriptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddScriptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
