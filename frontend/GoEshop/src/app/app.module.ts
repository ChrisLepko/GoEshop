import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertsComponent } from './components/alerts/alerts.component'
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
import { SideCategoryMenuComponent } from './components/side-category-menu/side-category-menu.component';
import { SearchAddProductComponent } from './components/search-add-product/search-add-product.component';
import { RightHeaderMenuComponent } from './components/right-header-menu/right-header-menu.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { PaymentComponent } from './components/payment/payment.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    ProductListComponent,
    AlertsComponent,
    SideCategoryMenuComponent,
    SearchAddProductComponent,
    RightHeaderMenuComponent,
    LogoutComponent,
    AddProductComponent,
    AddCategoryComponent,
    AccountDetailsComponent,
    ProductDetailsComponent,
    CartDetailsComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
