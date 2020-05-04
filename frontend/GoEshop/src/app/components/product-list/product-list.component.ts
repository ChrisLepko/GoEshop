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

  constructor(private productService: ProductDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listProducts()
  }

  listProducts(){
    this.searchModule = this.route.snapshot.paramMap.has('keyword');

    if(this.searchModule){
      this.handleSearchProducts();
    } else{
      this.handleListProducts();
    }
  }

  handleSearchProducts(){

  }

  handleListProducts(){
    this.productService.getProducts().subscribe(
      data => {
        this.products = data
      }
    )
  }

}
