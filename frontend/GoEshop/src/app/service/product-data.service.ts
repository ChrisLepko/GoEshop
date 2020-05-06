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
    ));
  }

  getProduct(productId: number) : Observable<Product> {
    return this.httpClient.get<Product>(`${API_URL}/products/${productId}`);
  }

  getProductsByCategory(categoryId: number) : Observable<Product[]>{
    return this.httpClient.get<GetResponseProducts>(`${API_URL}/products/search/findByCategoryId?id=${categoryId}`).pipe(map(
      response => response._embedded.products
      ));
  }

  getProductsByKeyword(keyword: string) : Observable<Product[]>{
    return this.httpClient.get<GetResponseProducts>(`${API_URL}/products/search/findByNameContaining?name=${keyword}`).pipe(map(
      respone => respone._embedded.products
    ));
  }

  deleteProduct(productId: number){
    return this.httpClient.delete(`${API_URL}/create/product/${productId}`);
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
