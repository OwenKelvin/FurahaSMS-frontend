import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeOnlineExamDashboardComponent } from './take-online-exam-dashboard.component';

describe('TakeOnlineExamDashbpardComponent', () => {
  let component: TakeOnlineExamDashboardComponent;
  let fixture: ComponentFixture<TakeOnlineExamDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeOnlineExamDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeOnlineExamDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
