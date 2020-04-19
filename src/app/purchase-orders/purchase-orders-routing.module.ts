import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseOrderListComponent } from './components/purchase-order-list/purchase-order-list.component';
import { PurchaseOrderDetailComponent } from './components/purchase-order-detail/purchase-order-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseOrderCreateComponent } from './components/purchase-order-create/purchase-order-create.component';

const routes: Routes = [
  { path: 'purchaseorders', component: PurchaseOrderListComponent},
  { path: 'purchaseorders/:id', component: PurchaseOrderDetailComponent},
  { path: 'puchaseorders/create', component: PurchaseOrderCreateComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseOrdersRoutingModule { }
