import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/service/product-data.service';
import { ProductCategory } from 'src/app/common/product-category';

@Component({
  selector: 'app-side-category-menu',
  templateUrl: './side-category-menu.component.html',
  styleUrls: ['./side-category-menu.component.css']
})
export class SideCategoryMenuComponent implements OnInit {

  productCategories: ProductCategory[]

  constructor(private productService: ProductDataService) { }

  ngOnInit(): void {
    this.listProductCategories();
  }

  listProductCategories(){

    this.productService.getProductCategories().subscribe(
      data => {
        this.productCategories = data
      }
    )
  }
}
