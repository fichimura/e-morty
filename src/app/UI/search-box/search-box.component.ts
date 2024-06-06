import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface SearchParams {
  searchQuery: string;
  searchFilter: string;
}

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})

export class SearchBoxComponent {
  @Input() searchBoxContext: string;
  @Input() searchQuery: string;
  @Input() searchFilter: string = 'name';
  @Output() searchEvent = new EventEmitter<SearchParams>();

  onSearchChange(searchParams: SearchParams): void{
    this.searchEvent.emit(searchParams);
  }

  onFilterChange(filter: string): void{
    this.searchFilter = filter;
    this.onSearchChange({searchQuery: this.searchQuery, searchFilter: this.searchFilter});
  }
}
