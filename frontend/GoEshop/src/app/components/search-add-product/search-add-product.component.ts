import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from 'src/app/service/basic-authentication.service';

@Component({
  selector: 'app-search-add-product',
  templateUrl: './search-add-product.component.html',
  styleUrls: ['./search-add-product.component.css']
})
export class SearchAddProductComponent implements OnInit {

  constructor(private router: Router, private basicAuthService: BasicAuthenticationService) { }

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

  isUserLoggedIn() : boolean {
    return this.basicAuthService.isUserLoggedIn();
  }

  hasAdminRole() : boolean {
    if(this.basicAuthService.getUserRole() == 'ROLE_ADMIN'){
      return true;
    }  
    return false
  }

}
