import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RouteGuardService } from './service/route-guard.service';
import { LogoutComponent } from './components/logout/logout.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AdminGuardService } from './service/admin-guard.service';


const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "logout", component: LogoutComponent},
  {path: "products", component: ProductListComponent, canActivate:[RouteGuardService]},
  {path: "add-product", component: AddProductComponent, canActivate:[AdminGuardService]},
  {path: "add-category", component: AddCategoryComponent, canActivate:[AdminGuardService]},
  {path: "account", component: AccountDetailsComponent, canActivate:[RouteGuardService]},
  {path: "category/:id", component: ProductListComponent, canActivate:[RouteGuardService]},
  {path: "search/:keyword", component: ProductListComponent, canActivate:[RouteGuardService]},
  {path: "products/:id", component: ProductDetailsComponent, canActivate:[RouteGuardService]},
  {path: "cart-details", component: CartDetailsComponent, canActivate:[RouteGuardService]},
  {path: "payment", component: PaymentComponent, canActivate:[RouteGuardService]},
  {path: '**', redirectTo: '/products', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
