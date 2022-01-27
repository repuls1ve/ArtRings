import { Routes } from '@angular/router'
import { CartComponent } from '../views/cart/cart.component'
import { CustomComponent } from '../views/custom/custom.component'
import { HomeComponent } from '../views/home/home.component'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'custom',
    component: CustomComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
]