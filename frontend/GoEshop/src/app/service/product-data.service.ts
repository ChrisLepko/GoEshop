import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';
import { ProductCategory } from '../common/product-category';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private httpClient: HttpClient) { }

  addProduct(name, sku, description, unitPrice, unitsInStock, categoryId, image){
    return this.httpClient.post(`${API_URL}/create/product?name=${name}&sku=${sku}&description=${description}&unitPrice=${unitPrice}
    &unitsInStock=${unitsInStock}&categoryId=${categoryId}`, image)
  }

  addCategory(id, categoryName){
    return this.httpClient.post(`${API_URL}/create/category?id=${id}&categoryName=${categoryName}`, null)
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient.get<GetResponseProductCategory>(`${API_URL}/product-categories`).pipe(map(
      response => response._embedded.productCategory
    ))
  }

  getProducts() : Observable<Product[]> {
    return this.httpClient.get<GetResponseProducts>(`${API_URL}/products`).pipe(map(
      response => response._embedded.products
    ))
  }
}


interface GetResponseProductCategory {
  _embedded : {
    productCategory : ProductCategory[];
  }
}

interface GetResponseProducts {
  _embedded : {
    products : Product[];
  }
  // page: {
  //   size: number,
  //   totalElements: number,
  //   totalPages: number,
  //   number: number
  // }
}
