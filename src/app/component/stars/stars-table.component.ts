import {Component, OnInit} from '@angular/core';
import {Product} from "../../interface/product.interface";
import {MainService} from "../../service/main.service";
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-not-found',
  templateUrl: './stars-table.component.html',
  styleUrls: ['./stars-table.component.scss']
})
export class StarsTableComponent implements OnInit{
  products: Product[] = [];
  layout: string = 'list';
  stateOptions: any[] = [{label: 'Список', value: 'list'}, {label: 'Плитки', value: 'grid'}];
  sortOptions: SelectItem[] = [];
  sortOrder: number = -1;
  sortField: string = 'price';

  constructor(private productService: MainService) {
    this.sortOptions = [
      { label: 'Ціна від вищої до нижчої', value: '!price' },
      { label: 'Ціна від нищої до вищої', value: 'price' },
      { label: 'Ім\'я A-Z', value: 'name' },
      { label: 'Ім\'я Z-A', value: '!name' },
      { label: 'Якість від нищої до вищої', value: 'quantity' },
      { label: 'Якість від вищої до нищої', value: '!quantity' },
      { label: 'Рейтинг від нищого до вищого', value: 'rating' },
      { label: 'Рейтинг від вищого до нищого', value: '!rating' },
    ];
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }


  ngOnInit() {
    this.productService.getStars().then((data) => (this.products = data));
  }
  remove(product: Product) {
    const index: number = this.productService.stars.indexOf(product);
    if (index !== -1) {
      this.productService.stars.splice(index, 1);
    }
  }

  getSeverity (product: Product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return 'warning';
    }
  };

  addToShop(product: Product) {
    this.productService.addToBuy(product);
  }
}
