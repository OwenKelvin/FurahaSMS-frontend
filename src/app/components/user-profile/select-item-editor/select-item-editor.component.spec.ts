import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectItemEditorComponent } from './select-item-editor.component';

describe('SelectItemEditorComponent', () => {
  let component: SelectItemEditorComponent;
  let fixture: ComponentFixture<SelectItemEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectItemEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectItemEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
