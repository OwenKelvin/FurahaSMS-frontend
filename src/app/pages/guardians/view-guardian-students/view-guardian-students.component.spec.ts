import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuardianStudentsComponent } from './view-guardian-students.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { StoreModule } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ViewGuardianStudentsComponent', () => {
  let component: ViewGuardianStudentsComponent;
  let fixture: ComponentFixture<ViewGuardianStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AppLoadingBubbleModule,
        StoreModule.forRoot({})
      ],
      declarations: [ViewGuardianStudentsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { parent: { paramMap: of({ get: () => 1 })}}
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuardianStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
