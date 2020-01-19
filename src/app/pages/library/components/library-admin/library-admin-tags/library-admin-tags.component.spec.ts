import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAdminTagsComponent } from './library-admin-tags.component';

describe('LibraryAdminTagsComponent', () => {
  let component: LibraryAdminTagsComponent;
  let fixture: ComponentFixture<LibraryAdminTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryAdminTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryAdminTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
