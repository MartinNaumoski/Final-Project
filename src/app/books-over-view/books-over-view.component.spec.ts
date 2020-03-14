import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksOverViewComponent } from './books-over-view.component';

describe('BooksOverViewComponent', () => {
  let component: BooksOverViewComponent;
  let fixture: ComponentFixture<BooksOverViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksOverViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksOverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
