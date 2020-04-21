import { Component, OnInit, OnDestroy } from '@angular/core';
import * as poReducer from '../../../store/purchase-order.reducer';
import { Store, select } from '@ngrx/store';
import { PurchaseOrderFilterCriteria } from '../../../models/purchase-order-filter-criteria';
import { takeWhile, filter } from 'rxjs/operators';
import { UpdateFilterCriteria } from '../../../store/purchase-order.actions';
import { PurchaseOrderStatus } from '../../../models/purchase-order-status.enum';
import { from } from 'rxjs';


@Component({
  selector: 'app-filter-chip-list',
  templateUrl: './filter-chip-list.component.html',
  styleUrls: ['./filter-chip-list.component.scss']
})
export class FilterChipListComponent implements OnInit, OnDestroy {
  filterCriteria: PurchaseOrderFilterCriteria;
  componentActive: boolean;

  constructor(private store: Store<poReducer.State>) {
    this.componentActive = true;
   }
  
  ngOnDestroy(): void {
    console.log("desrotyos")
    this.componentActive = false;
  }

  ngOnInit(): void {
    this.store.pipe(
      select(poReducer.getFilterCriteria),
      takeWhile(()=>this.componentActive)).subscribe(
      criteria => this.filterCriteria = criteria
    );
  }

  removeInactive() {
    this.store.dispatch(new UpdateFilterCriteria(
      {
        ...this.filterCriteria, 
        includeInactive: false}));
  }

  removeMaxCreated() {
    this.store.dispatch(new UpdateFilterCriteria(
      {
        ...this.filterCriteria,
        maxCreatedDate: null
      }
    ));
  }

  removeMinCreated() {
    this.store.dispatch(new UpdateFilterCriteria(
      {
        ...this.filterCriteria,
        minCreatedDate: null
      }
    ));
  }

  removeRevenueMin() {
    this.store.dispatch(new UpdateFilterCriteria(
      {
        ...this.filterCriteria,
        revenueMin: NaN,
      }
    ));
  }

  removeRevenueMax() {
    this.store.dispatch(new UpdateFilterCriteria(
      {
        ...this.filterCriteria,
        revenueMax: NaN,
      }
    ));
  }

  removeStatus(status: PurchaseOrderStatus){
    let newStatuses: PurchaseOrderStatus[] = [];
    from(this.filterCriteria.statuses).pipe(
      filter(st => st != status)
    ).subscribe(
      st => newStatuses.push(st)
    );
    this.store.dispatch(new UpdateFilterCriteria(
      {
        ...this.filterCriteria,
        statuses: newStatuses,
      }
    ))
  }

}
