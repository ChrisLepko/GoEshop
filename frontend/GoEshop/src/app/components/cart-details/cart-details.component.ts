import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
    this.listCartDetails();
  }

  listCartDetails(){
    this.cartItems = this.cartService.cartItems;

    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    this.cartService.computeCartTotals();
  }

  incrementQuantity(cartItem: CartItem){

    if(cartItem.quantity > cartItem.unitsInStock){
    }
    else{
      this.cartService.addToCart(cartItem);
      console.log("elo")
    }
  }

  decrementQuantity(cartItem: CartItem){
    this.cartService.decrementQuantity(cartItem);
  }

  remove(cartItem: CartItem){
    this.cartService.remove(cartItem);
  }

  clearCart(){
    window.scrollTo(0,0)
    this.cartService.removeAll();
    this.listCartDetails();
  }

  goToPayment(){
    this.router.navigate(['payment']);
  }

}
