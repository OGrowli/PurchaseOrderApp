import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { PurchaseOrdersModule } from '../purchase-orders/purchase-orders.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppModule,
    PurchaseOrdersModule,
  ]
})
export class SharedModule { }
