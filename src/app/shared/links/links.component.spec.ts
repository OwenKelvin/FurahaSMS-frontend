import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksComponent } from './links.component';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';

describe('LinksComponent', () => {
  let component: LinksComponent;
  let fixture: ComponentFixture<LinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppDashboardLinksModule],
      declarations: [ LinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
