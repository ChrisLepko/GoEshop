import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/service/product-data.service';
import { ProductCategory } from 'src/app/common/product-category';
import { BasicAuthenticationService } from 'src/app/service/basic-authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-category-menu',
  templateUrl: './side-category-menu.component.html',
  styleUrls: ['./side-category-menu.component.css']
})
export class SideCategoryMenuComponent implements OnInit {

  productCategories: ProductCategory[]

  constructor(private productService: ProductDataService, private basicAuthService: BasicAuthenticationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listProductCategories();
  }

  public listProductCategories(){

    this.productService.getProductCategories().subscribe(
      data => {
        this.productCategories = data
      }
    )
  }

  isUserLoggedIn(){
    return this.basicAuthService.isUserLoggedIn();
  }
}
