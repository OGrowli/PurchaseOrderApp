import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as poReducer from '../../../store/purchase-order.reducer';
import * as poActions from '../../../store/purchase-order.actions';
import { Store } from '@ngrx/store';
import { PurchaseOrder } from 'src/app/purchase-orders/models/purchase-order';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

  constructor(
    private store: Store<poReducer.State>,
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PurchaseOrder) { }

    onCancel(){
      this.dialogRef.close();
    }

    onAccept(){
      if (this.data.isActive){
        this.store.dispatch(new poActions.DeactivatePurchaseOrder(this.data));
      }
      else{ 
        this.store.dispatch(new poActions.DeletePurchaseOrder(this.data.id));
      }
    }

}
