import { ProductService } from './services/product.service';
import { RoleAuthGuardService } from './services/role-auth-guard.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { environment } from './../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductCategoryService } from './services/product-category.service';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ngx-custom-validators';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MyOrdersComponent,
    ManageOrdersComponent,
    ManageProductsComponent,
    ShoppingCartComponent,
    PageNotFoundComponent,
    HomeComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    NgbModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    RoleAuthGuardService,
    UserService,
    ProductService,
    ProductCategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
