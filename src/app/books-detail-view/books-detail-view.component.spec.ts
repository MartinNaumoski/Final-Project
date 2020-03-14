import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDetailViewComponent } from './books-detail-view.component';

describe('BooksDetailViewComponent', () => {
  let component: BooksDetailViewComponent;
  let fixture: ComponentFixture<BooksDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
