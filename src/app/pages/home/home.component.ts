import { ProductBoxComponent } from './components/product-box/product-box.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ProductsHeaderComponent } from './components/products-header/products-header.component';
import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatMenuModule,
    MatGridListModule,
    
    ProductsHeaderComponent,
    FiltersComponent,
    ProductBoxComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  cols = 3;
  category: string | undefined;
  rowHeight: number = ROWS_HEIGHT[this.cols];
  ngOnInit(): void {}
  oncolumnsCountChange(colsNum: number) {
    this.cols = colsNum;
  }
  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }
}
