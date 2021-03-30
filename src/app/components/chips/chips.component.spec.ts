import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {ChipsComponent} from './chips.component';

describe('ChipsComponent', () => {
  let component: ChipsComponent;
  let fixture: ComponentFixture<ChipsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ChipsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('property labelValue', () => {
    it('should be Active when value is true', () => {
      component.value = true;
      expect(component.labelValue).toBe('Active');
    });
  });

  describe('property labelValue', () => {
    it('should be Inactive when value is true', () => {
      component.value = false;
      expect(component.labelValue).toBe('Inactive');
    });
  });

  describe(' function removeItem', () => {
    it('should emit value true', () => {
      const removeSpy = spyOn(component.remove, 'emit');
      removeSpy.and.callFake((value) => expect(value).toBeTruthy());
      component.removeItem();
    });
  });
});
