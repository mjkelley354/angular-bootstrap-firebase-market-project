import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RoleAuthGuardService } from './services/role-auth-guard.service';
import { ProductFormComponent } from './components/product-form/product-form.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },

  { path: 'shopping-cart', component: ShoppingCartComponent },

  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
  { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuardService] },

  {
    path: 'manage-orders',
    component: ManageOrdersComponent,
    canActivate: [AuthGuardService, RoleAuthGuardService]
  },
  {
    path: 'manage-products/new',
    component: ProductFormComponent,
    canActivate: [AuthGuardService, RoleAuthGuardService]
  },
  {
    path: 'manage-products/:id',
    component: ProductFormComponent,
    canActivate: [AuthGuardService, RoleAuthGuardService]
  },
  {
    path: 'manage-products',
    component: ManageProductsComponent,
    canActivate: [AuthGuardService, RoleAuthGuardService]
  },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
