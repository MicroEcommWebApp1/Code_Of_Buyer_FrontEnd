import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BuyerdashComponent } from './buyerdash/buyerdash.component';
import { RegisterComponent } from './register/register.component';
import { ProfiledetailsComponent } from './profiledetails/profiledetails.component';
import { UpdateComponent } from './update/update.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { ForgotPasswordComponent } from './forgotpassword/forgotpassword.component';
import { PaymentComponent } from './payment/payment.component';




const routes: Routes = [{ path: '', component: HomeComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  {path: 'buyerdash', component: BuyerdashComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component:ProfiledetailsComponent},
  { path: 'update', component: UpdateComponent },
  {path: 'account', component: AccountComponent},
  {path: 'cart', component: CartComponent},
  {path:'forgotpassword', component: ForgotPasswordComponent},
  {path: 'payment', component:PaymentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
