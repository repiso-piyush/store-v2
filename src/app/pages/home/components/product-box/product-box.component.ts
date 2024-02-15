import { CurrencyPipe, NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-box',
  standalone: true,
  imports: [MatCardModule, CurrencyPipe, MatIconModule,NgClass,NgIf],
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.css',
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
}
