import {Component, OnInit} from '@angular/core';
import {Product} from "../../interface/product.interface";
import {MainService} from "../../service/main.service";
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-not-found',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit{
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
    this.productService.getShop().then((data) => (this.products = data));
  }
  remove(product: Product) {
    const index: number = this.productService.shoppingCart.indexOf(product);
    if (index !== -1) {
      this.productService.shoppingCart.splice(index, 1);
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

  addToStars(product: Product) {
    this.productService.addToStar(product)
  }


  addToShop(product: Product) {
    this.productService.addToBuy(product);
  }

  get getPrice() {
    if (this.productService.shoppingCart.length > 0) {
      return this.productService.shoppingCart.map(e => e.price)?.reduce((a: any, b: any) => a + b) ?? 0
    } else {
      return 0;
    }
  }
}
