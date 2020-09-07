import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MySchedulesComponent} from './my-schedules.component';
import {StoreModule} from '@ngrx/store';
import {appFeatureKey, reducers} from '../../../store/reducers/app.reducer';

describe('MySchedulesComponent', () => {
  let component: MySchedulesComponent;
  let fixture: ComponentFixture<MySchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forFeature(appFeatureKey, reducers)],
      declarations: [MySchedulesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
