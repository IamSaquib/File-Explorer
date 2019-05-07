import { TestBed } from '@angular/core/testing';

import { ExplorerServiceService } from './explorer-service.service';

describe('ExplorerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExplorerServiceService = TestBed.get(ExplorerServiceService);
    expect(service).toBeTruthy();
  });
});
