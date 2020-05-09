import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCollapseComponent } from './header-collapse.component';

describe('HeaderCollapseComponent', () => {
  let component: HeaderCollapseComponent;
  let fixture: ComponentFixture<HeaderCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
