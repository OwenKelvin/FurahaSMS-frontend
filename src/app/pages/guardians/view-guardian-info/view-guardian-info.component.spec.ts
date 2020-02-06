import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuardianInfoComponent } from './view-guardian-info.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ViewGuardianInfoComponent', () => {
  let component: ViewGuardianInfoComponent;
  let fixture: ComponentFixture<ViewGuardianInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({}),
        AppLoadingBubbleModule
      ],
      declarations: [ViewGuardianInfoComponent],
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
    fixture = TestBed.createComponent(ViewGuardianInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
