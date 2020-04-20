import { Component, OnInit, Input } from '@angular/core';
import { PurchaseOrderStatus } from '../../models/purchase-order-status.enum';

@Component({
  selector: 'app-po-status',
  templateUrl: './purchase-order-status.component.html',
  styleUrls: ['./purchase-order-status.component.scss']
})
export class PurchaseOrderStatusComponent implements OnInit {
  @Input() status: PurchaseOrderStatus;

  constructor() { }

  ngOnInit(): void {
  }

}