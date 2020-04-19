import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material.module';
import { PurchaseOrdersModule } from './purchase-orders/purchase-orders.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ApiDataService } from '../api/api-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    PurchaseOrdersModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ApiDataService),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MaterialModule,
    AppRoutingModule,
  ],
})
export class AppModule { }
