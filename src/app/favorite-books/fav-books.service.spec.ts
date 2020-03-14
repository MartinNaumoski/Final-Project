import { TestBed } from '@angular/core/testing';

import { FavBooksService } from './fav-books.service';

describe('FavBooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavBooksService = TestBed.get(FavBooksService);
    expect(service).toBeTruthy();
  });
});
