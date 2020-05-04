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


const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "logout", component: LogoutComponent},
  {path: "products", component: ProductListComponent, canActivate:[RouteGuardService]},
  {path: "add-product", component: AddProductComponent},
  {path: "add-category", component: AddCategoryComponent},
  {path: "account", component: AccountDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
