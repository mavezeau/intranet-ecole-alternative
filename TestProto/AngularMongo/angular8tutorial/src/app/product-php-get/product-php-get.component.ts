import { Component, OnInit } from '@angular/core';
import Product from '../Product';
import { ProductsService } from '../products.php.service';

@Component({
  selector: 'app-product-php-get',
  templateUrl: './product-php-get.component.html',
  styleUrls: ['./product-php-get.component.scss']
})
export class ProductPhpGetComponent implements OnInit {

  products: Product[];
  constructor(private ps: ProductsService) { }

  deleteProduct(Id) {
    this.ps.deleteProduct(Id).subscribe(res => {
      this.products.splice(Id, 1);
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
