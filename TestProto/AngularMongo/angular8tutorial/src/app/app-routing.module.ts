import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductPhpAddComponent } from './product-php-add/product-php-add.component';
import { ProductPhpEditComponent } from './product-php-edit/product-php-edit.component';
import { ProductPhpGetComponent } from './product-php-get/product-php-get.component';
import { ProductMysqlAddComponent } from './product-mysql-add/product-mysql-add.component';
import { ProductMysqlEditComponent } from './product-mysql-edit/product-mysql-edit.component';
import { ProductMysqlGetComponent } from './product-mysql-get/product-mysql-get.component';



const routes: Routes = [
  {
    path: 'product/create',
    component: ProductAddComponent
  },
  {
    path: 'product/edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'products',
    component: ProductGetComponent
  },
  {
    path: 'productmysql/create',
    component: ProductMysqlAddComponent
  },
  {
    path: 'productmysql/edit/:id',
    component: ProductMysqlEditComponent
  },
  {
    path: 'productsmysql',
    component: ProductMysqlGetComponent
  },
  {
    path: 'productphp/create',
    component: ProductPhpAddComponent
  },
  {
    path: 'productphp/edit/:Id',
    component: ProductPhpEditComponent
  },
  {
    path: 'productsphp',
    component: ProductPhpGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, { enableTracing: true }*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
