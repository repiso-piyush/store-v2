import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { Cart, CartItem } from './../../model/cart.model';
import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    NgIf,
    RouterLink,
    CurrencyPipe,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: 'https://picsum.photos/150',
        name: 'snickers',
        price: 150,
        quantity: 1,
        id: 1,
      },
      {
        product: 'https://picsum.photos/150',
        name: 'snickers',
        price: 150,
        quantity: 3,
        id: 1,
      },
    ],
  };

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];
  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>) {
    return items
      .map((items) => items.price * items.quantity)
      .reduce((acc, value) => acc + value, 0);
  }
}
