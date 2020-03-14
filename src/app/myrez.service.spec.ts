import { TestBed } from '@angular/core/testing';

import { MyrezService } from './myrez.service';

describe('MyrezService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyrezService = TestBed.get(MyrezService);
    expect(service).toBeTruthy();
  });
});
