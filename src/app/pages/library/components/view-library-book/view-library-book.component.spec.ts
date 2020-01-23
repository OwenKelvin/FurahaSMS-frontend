import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLibraryBookComponent } from './view-library-book.component';

describe('ViewLibraryBookComponent', () => {
  let component: ViewLibraryBookComponent;
  let fixture: ComponentFixture<ViewLibraryBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLibraryBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLibraryBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
