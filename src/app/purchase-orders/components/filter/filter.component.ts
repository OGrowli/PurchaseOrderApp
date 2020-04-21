import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Customer } from '../../models/customer';
import { PurchaseOrderStatus } from '../../models/purchase-order-status.enum';
import { getStatusName } from '../shared/common';
import * as poReducer from '../../store/purchase-order.reducer';
import * as poActions from '../../store/purchase-order.actions';
import * as fromRoot from '../../../store/app.reducer';
import { Store, select } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PurchaseOrderFilterCriteria } from '../../models/purchase-order-filter-criteria';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {
  criteriaForm: FormGroup = new FormGroup({
    includeInactive: new FormControl(false),
    maxCreatedDate: new FormControl(''),
    minCreatedDate: new FormControl(''),
    revenueMin: new FormControl(''),
    revenueMax: new FormControl(''),
    customerIds: new FormControl([]),
    statuses: new FormControl([])
  });
  customers: Customer[];
  statusList: PurchaseOrderStatus[] =[
    PurchaseOrderStatus.Closed,
    PurchaseOrderStatus.Recieved,
    PurchaseOrderStatus.Shipped,
    PurchaseOrderStatus.WaitingForPayment,
  ];
  getStatusName: (status: PurchaseOrderStatus) => string;
  initializeFormGroup() {
    this.criteriaForm.setValue({
      includeInactive: false,
      maxCreatedDate: '',
      minCreatedDate: '',
      revenueMax: '',
      revenueMin: '',
      customerIds: [],
      statuses: [],
    })
  };
  componentActive: boolean;

  constructor(private store: Store<poReducer.State>) {
    this.getStatusName = getStatusName;
    this.componentActive = true;
  }

  ngOnInit(){
    this.store.dispatch(new poActions.LoadCustomers());
    this.store.pipe(select(poReducer.getCustomers),
      takeWhile(() => this.componentActive)).subscribe(
        customerList => this.customers = customerList
      );
  }

  ngOnDestroy(){
    this.componentActive = false;
  }

  onSubmit() {
    let actualStatus: PurchaseOrderStatus[] = [];
    let closed: boolean = true;
    let recieved: boolean = true;
    let shipped: boolean = true;
    let waiting: boolean = true
    for(let st of this.criteriaForm.value["statuses"]){
      console.log(st);
      switch(st) {
        case "0":{
          actualStatus.push(PurchaseOrderStatus.Closed);
          break;}
        case"1":{
          actualStatus.push(PurchaseOrderStatus.Recieved);
          break;}
        case "2":{
          actualStatus.push(PurchaseOrderStatus.Shipped);
          break;
        }
        case "3": {
          actualStatus.push(PurchaseOrderStatus.WaitingForPayment);
          break;
        }
      }
    }
    const criteria: PurchaseOrderFilterCriteria = {
      includeInactive: this.criteriaForm.value["includeInactive"],
      maxCreatedDate: this.criteriaForm.value["maxCreatedDate"],
      minCreatedDate: this.criteriaForm.value["minCreatedDate"],
      revenueMin: this.criteriaForm.value["revenueMin"],
      revenueMax: this.criteriaForm.value["revenueMax"],
      customerIds: this.criteriaForm.value["customerIds"],
      statuses: actualStatus,
    };
    this.store.dispatch(new poActions.UpdateFilterCriteria(criteria));
    this.store.dispatch(new fromRoot.SetShowRightSideNav(false));
  }

  onClear(){
    this.criteriaForm.reset()
    this.initializeFormGroup();
  }
}
