import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLibraryClassComponent } from './select-library-class.component';

describe('SelectLibraryClassComponent', () => {
  let component: SelectLibraryClassComponent;
  let fixture: ComponentFixture<SelectLibraryClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectLibraryClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLibraryClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
