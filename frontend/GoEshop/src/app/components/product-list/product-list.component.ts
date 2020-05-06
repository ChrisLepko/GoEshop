import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/service/product-data.service';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  searchModule: boolean = false;
  currentCategoryId: number;
  previousCategoryId: number;

  pageNumber: number = 1;
  pageSize: number = 20;
  totalElements: number = 0;

  previousKeyword: string = null;

  constructor(private productService: ProductDataService, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
    this.searchModule = this.route.snapshot.paramMap.has('keyword');

    if (this.searchModule) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }

  handleSearchProducts() {
    const keyword: string = this.route.snapshot.paramMap.get('keyword');

    if(this.previousKeyword != keyword){
      this.pageNumber = 1;
    }

    this.previousKeyword = keyword;

    this.productService.getProductsByKeywordPaginate(this.pageNumber - 1, this.pageSize, keyword).subscribe(this.processResult())
  }

  handleListProducts() {

    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')

      if(this.previousCategoryId != this.currentCategoryId){
        this.pageNumber = 1;
      }

      this.previousCategoryId = this.currentCategoryId

      this.productService.getProductsByCategoryPaginate(this.pageNumber - 1, this.pageSize, this.currentCategoryId).subscribe(this.processResult())
    } else {

      this.productService.getProductsPaginate(this.pageNumber - 1, this.pageSize).subscribe(this.processResult())

    }
  }

  processResult(){
    return data => {
      this.products = data._embedded.products
      this.pageNumber = data.page.number + 1;
      this.pageSize = data.page.size;
      this.totalElements = data.page.totalElements;
    }
  }

  updatePageSize(pageSize: number){
    window.scrollTo(0,0)
    this.pageSize = pageSize;
    this.pageNumber = 1;
    this.listProducts();
  }

  addToCart(product: Product){
    const cartItem = new CartItem(product);

    this.cartService.addToCart(cartItem);
  }

}
