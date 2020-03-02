import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.mysql.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-mysql-edit.component.html',
  styleUrls: ['./product-mysql-edit.component.scss']
})
export class ProductMysqlEditComponent implements OnInit {

  angForm: FormGroup;
  product: any = {};
  constructor(private route: ActivatedRoute, private router: Router, private ps: ProductsService, private fb: FormBuilder) {
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required ],
      ProductDescription: ['', Validators.required ],
      ProductPrice: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    this.route.params.subscribe(params => {
      this.ps.updateProduct(ProductName, ProductDescription, ProductPrice, params.id);
      this.router.navigate(['products']);
      
    });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.editProduct(params['id']).subscribe(res => {
        this.product = res;
    });
  });
  }

}
