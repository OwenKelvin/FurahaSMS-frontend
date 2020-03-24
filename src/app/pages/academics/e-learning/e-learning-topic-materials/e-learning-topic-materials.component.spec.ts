import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningTopicMaterialsComponent } from './e-learning-topic-materials.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ELearningTopicMaterialsComponent', () => {
  let component: ELearningTopicMaterialsComponent;
  let fixture: ComponentFixture<ELearningTopicMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ELearningTopicMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningTopicMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
