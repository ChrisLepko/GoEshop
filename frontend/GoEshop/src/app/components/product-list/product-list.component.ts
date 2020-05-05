import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/service/product-data.service';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private productService: ProductDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
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

    this.productService.getProductsByKeyword(keyword).subscribe(
      data => {
        this.products = data
      }
    )
  }

  handleListProducts() {

    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')

      this.productService.getProductsByCategory(this.currentCategoryId).subscribe(
        data => {
          this.products = data
        }
      )
    } else {

      this.productService.getProducts().subscribe(
        data => {
          this.products = data
        }
      )

    }
  }

}
