import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BarcodeComponent } from './barcode.component';
import { AppBarcodeModule } from './barcode.module';

describe('BarcodeComponent', () => {
  let component: BarcodeComponent;
  let fixture: ComponentFixture<BarcodeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AppBarcodeModule
      ],
      declarations: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
