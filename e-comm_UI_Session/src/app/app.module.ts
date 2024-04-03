import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
 import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { BuyerdashComponent } from './buyerdash/buyerdash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { BuyernavbarComponent } from './buyernavbar/buyernavbar.component';
import { ProfiledetailsComponent } from './profiledetails/profiledetails.component';
import { UpdateComponent } from './update/update.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { ForgotPasswordComponent } from './forgotpassword/forgotpassword.component';
import { PaymentComponent } from './payment/payment.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    BuyerdashComponent,
    RegisterComponent,
    NavbarComponent,
    BuyernavbarComponent,
    ProfiledetailsComponent,
    UpdateComponent,
    AccountComponent,
    CartComponent,
    ForgotPasswordComponent,
    PaymentComponent
   
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
