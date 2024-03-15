import { Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { CartComponent } from './Components/cart/cart.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HomeComponent } from './Components/home/home.component';
import { CustomObservableComponent } from './Components/custom-observable/custom-observable.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'product/:id', component: ProductDetailsComponent, title: 'Product' },
  { path: 'login', component: LoginComponent, title: 'login' },
  { path: 'profile', component: ProfileComponent, title: 'Profile' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  { path: 'observable', component: CustomObservableComponent, title: 'Custom observable' },
  { path: '**', component: NotfoundComponent },
];
