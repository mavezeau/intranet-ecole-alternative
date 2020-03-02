import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.php.service';

@Component({
  selector: 'app-product-php-edit',
  templateUrl: './product-php-edit.component.html',
  styleUrls: ['./product-php-edit.component.scss']
})
export class ProductPhpEditComponent implements OnInit {

  angForm: FormGroup;
  ProductName = new FormControl('', Validators.required);
  ProductDescription = new FormControl('', Validators.required);
  ProductPrice = new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[0-9]*$")]));
  product: any = {};
  constructor(private route: ActivatedRoute, private router: Router, private ps: ProductsService, private fb: FormBuilder) {
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
      ProductName: this.ProductName,
      ProductDescription: this.ProductDescription,
      ProductPrice: this.ProductPrice,
    });
  }

  updateProduct(ProductName, ProductDescription, ProductPrice, Id) {
    this.route.params.subscribe(params => {
      this.ps.updateProduct(ProductName, ProductDescription, ProductPrice, params.Id);
      this.router.navigate(['productsphp']);
    });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.editProduct(params['Id']).subscribe(res => {
        this.product = res;
    });
  });
  }


}
