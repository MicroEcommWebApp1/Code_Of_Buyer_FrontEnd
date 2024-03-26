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
    path:'productdetail',
    component:ProductDetailComponent
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
