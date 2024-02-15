import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatExpansionModule, MatListModule,NgFor,NgIf],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  categories: string[] = ['shoes', 'sports'];
  @Output() showCategory = new EventEmitter<string>();
  onShowCategory(category: string):void {
    console.log('in filtercategory', category);
    this.showCategory.emit(category);
  }
}
