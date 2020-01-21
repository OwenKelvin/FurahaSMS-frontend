import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLibrarySubClassComponent } from './select-library-sub-class.component';

describe('SelectLibrarySubClassComponent', () => {
  let component: SelectLibrarySubClassComponent;
  let fixture: ComponentFixture<SelectLibrarySubClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectLibrarySubClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLibrarySubClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
