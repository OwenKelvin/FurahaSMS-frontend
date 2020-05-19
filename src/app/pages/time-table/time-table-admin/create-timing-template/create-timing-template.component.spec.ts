import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTimingTemplateComponent } from './create-timing-template.component';

describe('CreateTimingTemplateComponent', () => {
  let component: CreateTimingTemplateComponent;
  let fixture: ComponentFixture<CreateTimingTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTimingTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTimingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
