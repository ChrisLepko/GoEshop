import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-add-product',
  templateUrl: './search-add-product.component.html',
  styleUrls: ['./search-add-product.component.css']
})
export class SearchAddProductComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addProduct(){
    this.router.navigate(['add-product'])
  }

  addCategory(){
    this.router.navigate(['add-category'])
  }

  searchProducts(keyword: string){
    this.router.navigateByUrl(`/search/${keyword}`)
  }

}
