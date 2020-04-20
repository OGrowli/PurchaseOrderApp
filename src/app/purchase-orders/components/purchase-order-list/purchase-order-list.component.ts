import { AfterViewInit, Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { PurchaseOrderListDataSource, PurchaseOrderListItem } from './purchase-order-list-datasource';
import { PurchaseOrder } from '../../models/purchase-order';
import { DataSource } from '@angular/cdk/collections';
import * as poReducer from '../../store/purchase-order.reducer';
import * as poActions from '../../store/purchase-order.actions';
import { Store, select } from '@ngrx/store';
import { getDescription, getRevenue } from '../shared/common';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-purchase-order-list',
  templateUrl: './purchase-order-list.component.html',
  styleUrls: ['./purchase-order-list.component.scss']
})
export class PurchaseOrderListComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<PurchaseOrder>;
  dataSource: MatTableDataSource<PurchaseOrder>;
  purchaseOrders$: Observable<PurchaseOrder[]>;
  getDescription: (order: PurchaseOrder) => string;
  getRevenue: (order: PurchaseOrder) => number;
  componentActive: boolean;

  constructor(
    private store: Store<poReducer.State>){
      this.getDescription = getDescription;
      this.getRevenue = getRevenue;
      this.componentActive = true;
    }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'OrderNumber', 
    'Customer',
    'CreatedDate', 
    'Description', 
    'Status', 
    'Revenue',
    'Actions'];

  ngOnInit() {
    this.store.dispatch(new poActions.LoadPurchaseOrders());
    this.purchaseOrders$ = this.store.pipe(select(poReducer.getPurchaseOrders));
    this.purchaseOrders$.pipe(
      takeWhile(() => this.componentActive)).subscribe(
        orders => this.dataSource = new MatTableDataSource(orders));
  }

  ngOnDestroy(){
    this.componentActive = false;
  }

  ngAfterViewInit() {
    console.log()
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
