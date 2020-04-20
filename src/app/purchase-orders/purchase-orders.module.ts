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
import { Features } from '../store/app.reducer';
import { purchaseOrderReducer } from './store/purchase-order.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PurchaseOrderEffects } from './store/purchase-order.effects';
import { PurchaseOrderStatusComponent } from './components/purchase-order-status/purchase-order-status.component';
import { ConfirmationDialogComponent } from './components/purchase-order-list/confirmation-dialog/confirmation-dialog.component';
import { SnackbarNotificationsComponent } from './components/snackbar-notifications/snackbar-notifications.component';




@NgModule({
  declarations: [
    FilterComponent, 
    PurchaseOrderListComponent, 
    PurchaseOrderDetailComponent, 
    PurchaseOrderCreateComponent, 
    ProductListModalComponent, PurchaseOrderStatusComponent, ConfirmationDialogComponent, SnackbarNotificationsComponent
  ],
  imports: [
    CommonModule,
    PurchaseOrdersRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(Features.PurchaseOrders, purchaseOrderReducer),
    EffectsModule.forFeature([PurchaseOrderEffects]),
  ], 
  exports: [FilterComponent, PurchaseOrdersRoutingModule]
})
export class PurchaseOrdersModule { }
