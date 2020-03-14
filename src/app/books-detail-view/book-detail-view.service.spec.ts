import { TestBed } from '@angular/core/testing';

import { BookDetailViewService } from './book-detail-view.service';

describe('BookDetailViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookDetailViewService = TestBed.get(BookDetailViewService);
    expect(service).toBeTruthy();
  });
});
