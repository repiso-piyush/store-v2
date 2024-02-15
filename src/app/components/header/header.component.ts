import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';
import { CurrencyPipe } from '@angular/common'; 
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatToolbar, MatBadgeModule, MatMenuModule,CurrencyPipe,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
