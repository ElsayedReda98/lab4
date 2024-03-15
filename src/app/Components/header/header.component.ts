import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  Routes = [
    { path: 'home', title: 'Home' },
    { path: 'login', title: 'Login' },
    { path: 'about', title: 'About' },
    { path: 'contact', title: 'Contact' },
    { path: 'profile', title: 'Profile' },
    { path: 'cart', title: 'Cart' },
    { path: 'observable', title: 'observable' },
  ];
}
