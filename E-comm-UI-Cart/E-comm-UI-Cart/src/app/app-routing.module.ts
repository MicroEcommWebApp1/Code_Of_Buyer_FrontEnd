import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HomeComponent } from './home/home.component';

import { BuyerDashComponent } from './buyer-dash/buyer-dash.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmPageComponent } from './confirm-page/confirm-page.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'mainpage', component: MainpageComponent },
  {path: 'cart', component: CartComponent},
  { path: 'buyer-dash', component: BuyerDashComponent },
  { path: 'productdetail/:productId',component:ProductDetailComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {path:'checkout',component:CheckoutComponent},
  {path:'editprofile',component:EditprofileComponent},
  {path:'shop',component:ShopComponent},
  {path: 'confirm-page', component: ConfirmPageComponent},
  {path: 'order-list', component: OrderListComponent},
  { path: '**', redirectTo: '/home' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
