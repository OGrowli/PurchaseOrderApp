import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderStatusComponent } from './purchase-order-status.component';

describe('PurchaseOrderStatusComponent', () => {
  let component: PurchaseOrderStatusComponent;
  let fixture: ComponentFixture<PurchaseOrderStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseOrderStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
