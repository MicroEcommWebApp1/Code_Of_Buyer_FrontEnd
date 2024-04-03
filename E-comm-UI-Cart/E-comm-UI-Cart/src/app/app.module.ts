import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';

import { BuyerDashComponent } from './buyer-dash/buyer-dash.component';


import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

import { EditprofileComponent } from './editprofile/editprofile.component';
import { BuyernavbarComponent } from './buyernavbar/buyernavbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'product/:id', component: ProductDetailComponent }, 
  { path: '**', redirectTo: '' } ];

  
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
         RegisterComponent,
         MainpageComponent,
       
         BuyerDashComponent,
         ProductDetailComponent,
         ForgotPasswordComponent,
         CheckoutComponent,
         FooterComponent,
        
         EditprofileComponent,
         BuyernavbarComponent ,
         NavbarComponent,
         ShopComponent,
         CartComponent
  ],
  
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MainpageComponent },
      
      
    ]),
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
