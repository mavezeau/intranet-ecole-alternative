import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductEditComponent } from './product-edit/product-edit.component';


import { ProductsService } from './products.service';
import { ProductPhpAddComponent } from './product-php-add/product-php-add.component';
import { ProductPhpEditComponent } from './product-php-edit/product-php-edit.component';
import { ProductPhpGetComponent } from './product-php-get/product-php-get.component';
import { ProductMysqlAddComponent } from './product-mysql-add/product-mysql-add.component';
import { ProductMysqlGetComponent } from './product-mysql-get/product-mysql-get.component';
import { ProductMysqlEditComponent } from './product-mysql-edit/product-mysql-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductGetComponent,
    ProductEditComponent,
    ProductPhpAddComponent,
    ProductPhpEditComponent,
    ProductPhpGetComponent,
    ProductMysqlAddComponent,
    ProductMysqlGetComponent,
    ProductMysqlEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlimLoadingBarModule,
    ReactiveFormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
