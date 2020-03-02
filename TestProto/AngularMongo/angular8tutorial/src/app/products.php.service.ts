import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://localhost/api/product';

  constructor(private http: HttpClient) { }

  addProduct(ProductName, ProductDescription, ProductPrice) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getProducts() {
    return this
           .http
           .get(`${this.uri}`);
  }
  editProduct(Id) {
    return this
          .http
          .get(`${this.uri}/edit/${Id}`);
  }
  updateProduct(ProductName, ProductDescription, ProductPrice, Id) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    this
      .http
      .post(`${this.uri}/update/${Id}`, obj)
      .subscribe(res => console.log('Done'));
  }
  deleteProduct(Id) {
    return this
              .http
              .get(`${this.uri}/delete/${Id}`);
  }
}
