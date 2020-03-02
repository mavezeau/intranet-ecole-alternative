import { Component, OnInit } from '@angular/core';
import Product from '../Product';
import { ProductsService } from '../products.mysql.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-mysql-get.component.html',
  styleUrls: ['./product-mysql-get.component.scss']
})
export class ProductMysqlGetComponent implements OnInit {

  products: Product[];
  constructor(private ps: ProductsService) { }

  deleteProduct(id) {
    this.ps.deleteProduct(id).subscribe(res => {
      this.products.splice(id, 1);
    });
}
  ngOnInit() {
    this.ps
      .getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
    });
  }

}
