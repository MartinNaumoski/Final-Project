import { TestBed } from '@angular/core/testing';

import { BookOverVIewService } from './book-over-view.service';

describe('BookOverVIewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookOverVIewService = TestBed.get(BookOverVIewService);
    expect(service).toBeTruthy();
  });
});
