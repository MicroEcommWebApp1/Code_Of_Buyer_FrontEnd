import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { ShopComponent } from './shop/shop.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { JeanComponent } from './components/jean/jean.component';
import { ShirtComponent } from './components/shirt/shirt.component';
import { KurthiComponent } from './components/kurthi/kurthi.component';
import { ApplephoneComponent } from './components/applephone/applephone.component';
import { SamsungComponent } from './components/samsung/samsung.component';
import { BoatComponent } from './components/boat/boat.component';
import { NoiseComponent } from './components/noise/noise.component';
import { SareeComponent } from './components/saree/saree.component';
import {MatSelectModule} from '@angular/material/select';
import { AboutComponent } from './about/about.component';
import { ApparelComponent } from './components/apparel/apparel.component';
import { GadgetsComponent } from './components/gadgets/gadgets.component';
import { ProductDetail2Component } from './product-detail2/product-detail2.component';
import { ApparelHeaderComponent } from './components/apparel-header/apparel-header.component';
import { GadgetsHeaderComponent } from './components/gadgets-header/gadgets-header.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
  
    FooterComponent,
       HeroComponent,
       ShopComponent,
       ProductDetailComponent,
       
       JeanComponent,
       ShirtComponent,
       KurthiComponent,
       ApplephoneComponent,
       SamsungComponent,
       BoatComponent,
       NoiseComponent,
       SareeComponent,
       AboutComponent,
       ApparelComponent,
       GadgetsComponent,
       ProductDetail2Component,
       ApparelHeaderComponent,
       GadgetsHeaderComponent,
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,MatSelectModule
  ],
  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
