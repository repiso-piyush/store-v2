
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HeaderComponent } from './components/header/header.component';
import {HomeComponent} from './pages/home/home.component';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    
    MatSidenavModule,
    MatTreeModule,
    MatToolbarModule,
    MatSnackBarModule,

    HeaderComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'store-v2';
}
