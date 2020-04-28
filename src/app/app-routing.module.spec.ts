import { LoginComponent } from './components/login/login.component';
import { routes } from './app-routing.module';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

describe('routes', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LoginComponent
      ],
    }).compileComponents();
  }));

  it('should have route for /', () => {
    expect(routes).toContain({ path: '', component: HomeComponent });
  });

  it('should have route for /check-out', () => {
    expect(routes).toContain({ path: 'check-out', component: CheckOutComponent });
  });

  it('should have route for /login', () => {
    expect(routes).toContain({ path: 'login', component: LoginComponent});
  });

  it('should have route for /manage-orders', () => {
    expect(routes).toContain({ path: 'manage-orders', component: ManageOrdersComponent });
  });

  it('should have route for /manage-products', () => {
    expect(routes).toContain({ path: 'manage-products', component: ManageProductsComponent });
  });

  it('should have route for /manage-products/new', () => {
    expect(routes).toContain({ path: 'manage-products', component: ProductFormComponent });
  });

  it('should have route for /my-orders', () => {
    expect(routes).toContain({ path: 'my-orders', component: MyOrdersComponent });
  });

  it('should have route for /order-success', () => {
    expect(routes).toContain({ path: 'order-success', component: OrderSuccessComponent });
  });

  it('should have route for /products', () => {
    expect(routes).toContain({ path: 'products', component: ProductsComponent });
  });

  it('should have route for /shopping-cart', () => {
    expect(routes).toContain({ path: 'shopping-cart', component: ShoppingCartComponent });
  });

  it('should have a page not found route not specified', () => {
    expect(routes).toContain({ path: '**', component: PageNotFoundComponent });
  });
});
