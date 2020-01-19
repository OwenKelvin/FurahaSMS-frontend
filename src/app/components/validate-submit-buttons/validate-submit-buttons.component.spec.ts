import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateSubmitButtonsComponent } from './validate-submit-buttons.component';
import { FormGroup } from '@angular/forms';

describe('ValidateSubmitButtonsComponent', () => {
  let component: ValidateSubmitButtonsComponent;
  let fixture: ComponentFixture<ValidateSubmitButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateSubmitButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateSubmitButtonsComponent);
    component = fixture.componentInstance;
    component.formItem = new FormGroup({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
