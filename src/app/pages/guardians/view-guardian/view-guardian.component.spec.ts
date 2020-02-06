import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuardianComponent } from './view-guardian.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewGuardianComponent', () => {
  let component: ViewGuardianComponent;
  let fixture: ComponentFixture<ViewGuardianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        
      ],
      declarations: [ ViewGuardianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
