import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { PurchaseOrder } from '../models/purchase-order';
import { ApiUrls } from 'src/api/api-urls';
import {tap, catchError, map, filter} from 'rxjs/operators';
import { handleError } from './handle-error';
import { PurchaseOrderFilterCriteria } from '../models/purchase-order-filter-criteria';
import { getRevenue } from '../components/shared/common';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  constructor(private http: HttpClient) { }

  getPurchaseOrders(criteria: PurchaseOrderFilterCriteria = null): Observable<PurchaseOrder[]>{
    return this.http.get<PurchaseOrder[]>(ApiUrls.purchaseOrders).pipe(
      map(orders=> this.filterPurchaseOrders(criteria, orders)),
      catchError(handleError)
    );
  }

  getPurchaseOrder(id: number): Observable<PurchaseOrder | undefined> {
    return this.http.get<PurchaseOrder>(`${ApiUrls.products}/${id}`).pipe(
      catchError(handleError)
    );
  }

  createPurchaseOrder(order: PurchaseOrder){
    return this.http.post<PurchaseOrder>(ApiUrls.purchaseOrders, order).pipe(
      catchError(handleError)
    );
  }

  deletePurchaseOrder(id: number) {
    return this.http.delete<PurchaseOrder>(`${ApiUrls.purchaseOrders}/${id}`).pipe(
      catchError(handleError)
    );
  }

  updatePurchaseOrder(order: PurchaseOrder) {
    return this.http.put<PurchaseOrder>(`${ApiUrls.purchaseOrders}/${order.id}`, order).pipe(
      catchError(handleError)
    );
  }

  private filterPurchaseOrders(criteria: PurchaseOrderFilterCriteria, orders: PurchaseOrder[]): PurchaseOrder[] {
    if (!criteria) {
      return orders;
    }
    let revenue: number;
    let filteredOrders: PurchaseOrder[] = [];
    from(orders).pipe(
      filter(order => (criteria.customerIds && criteria.customerIds.length > 0) ? criteria.customerIds.includes(order.customerId) : true),
      filter(order => order.isActive || (order.isActive == !criteria.includeInactive)),
      filter(order => criteria.maxCreatedDate ? (order.created <= criteria.maxCreatedDate) : true),
      filter(order => criteria.minCreatedDate ? (order.created >= criteria.minCreatedDate) : true),
      tap(order => revenue = getRevenue(order)),
      filter(() => criteria.revenueMax ? (revenue < criteria.revenueMax) : true),
      filter(() => criteria.revenueMin ? (revenue > criteria.revenueMin) : true),
      filter(order => (criteria.statuses && criteria.statuses.length > 0) ? criteria.statuses.includes(order.status) : true),
    ).subscribe(
      order => filteredOrders.push(order)
    );
    return filteredOrders;
  }
}
