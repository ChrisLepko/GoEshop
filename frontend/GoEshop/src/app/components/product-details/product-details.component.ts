import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/service/product-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/service/cart.service';
import { BasicAuthenticationService } from 'src/app/service/basic-authentication.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();
  productNotFound: boolean = false;

  constructor(private productService: ProductDataService, private route: ActivatedRoute, private cartService: CartService, private router: Router,
              private basicAuthService: BasicAuthenticationService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
      console.log(this.product)
    })
  }

  handleProductDetails(){
    const productId: number = +this.route.snapshot.paramMap.get('id');

    this.productService.getProduct(productId).subscribe(
      data => {
        this.product = data;
      },
      error => {
        this.productNotFound = true
      }
    )
  }

  addToCart(){
    const cartItem = new CartItem(this.product);
    this.cartService.addToCart(cartItem)
  }

  deleteItem(){
    const productId: number = +this.route.snapshot.paramMap.get('id');
    this.productService.deleteProduct(productId).subscribe(
      response => {
        console.log("Item removed")
      }
    );
    this.router.navigate(['products'])
  }

  hasAdminRole() : boolean {
    if(this.basicAuthService.getUserRole() == 'ROLE_ADMIN'){
      return true;
    }  
    return false
  }

}
