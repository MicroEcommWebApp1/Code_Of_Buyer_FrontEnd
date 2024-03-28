import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ShopComponent } from './shop/shop.component';
import { HeroComponent } from './hero/hero.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SareeComponent } from './components/saree/saree.component';
import { KurthiComponent } from './components/kurthi/kurthi.component';
import { JeanComponent } from './components/jean/jean.component';
import { ShirtComponent } from './components/shirt/shirt.component';
import { BoatComponent } from './components/boat/boat.component';
import { ApplephoneComponent } from './components/applephone/applephone.component';
import { NoiseComponent } from './components/noise/noise.component';
import { SamsungComponent } from './components/samsung/samsung.component';
import { AboutComponent } from './about/about.component';
import { ApparelComponent } from './components/apparel/apparel.component';
import { GadgetsComponent } from './components/gadgets/gadgets.component';
import { ProductDetail2Component } from './product-detail2/product-detail2.component';


const routes: Routes = [
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'shop',
    component:ShopComponent
  },
  {
    path:'',
    component:HeroComponent

  },
  {
    path:'productdetail/:product_id',
    component:ProductDetailComponent
  },
  {
    path:'productdetail2/:product_id',
    component:ProductDetail2Component
  },
  {
    path:'saree',
    component:SareeComponent
  },
  {
    path:'kurthi',
    component:KurthiComponent
  },
  {
    path:'jean',
    component:JeanComponent
  },
  {
    path:'shirt',
    component:ShirtComponent
  },
  {
    path:'boat',
    component:BoatComponent
  },
  {
    path:'applephone',
    component:ApplephoneComponent
  },
  {
    path:'noise',
    component:NoiseComponent
  },
  {
    path:'samsung',
    component:SamsungComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {path:'apparel',component:ApparelComponent},
  {path:'gadgets',component:GadgetsComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
