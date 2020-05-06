import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { BasicAuthenticationService } from 'src/app/service/basic-authentication.service';

@Component({
  selector: 'app-right-header-menu',
  templateUrl: './right-header-menu.component.html',
  styleUrls: ['./right-header-menu.component.css']
})
export class RightHeaderMenuComponent implements OnInit {

  totalPrice: number = 0.00
  totalQuantity: number = 0;

  constructor(private router: Router, private cartService: CartService, private basicAuthService: BasicAuthenticationService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  logout(){
    this.router.navigate(['logout'])
  }

  details(){
    this.router.navigate(['account'])
  }

  updateCartStatus(){
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
  }

  isUserLoggedIn() : boolean{
    return this.basicAuthService.isUserLoggedIn()
  }

  signIn(){
    this.router.navigate(['login'])
  }

}
