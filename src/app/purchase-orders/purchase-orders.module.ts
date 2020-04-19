import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PurchaseOrderListComponent } from './components/purchase-order-list/purchase-order-list.component';
import { PurchaseOrderDetailComponent } from './components/purchase-order-detail/purchase-order-detail.component';
import { PurchaseOrdersRoutingModule } from './purchase-orders-routing.module';
import { PurchaseOrderCreateComponent } from './components/purchase-order-create/purchase-order-create.component';
import { MaterialModule } from '../material.module';
import { FilterComponent } from './components/filter/filter.component';
import { ProductListModalComponent } from './components/product-list-modal/product-list-modal.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [FilterComponent, PurchaseOrderListComponent, PurchaseOrderDetailComponent, PurchaseOrderCreateComponent, ProductListModalComponent],
  imports: [
    CommonModule,
    PurchaseOrdersRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ], 
  exports: [FilterComponent, PurchaseOrdersRoutingModule]
})
export class PurchaseOrdersModule { }
