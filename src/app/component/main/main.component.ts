import { Component } from '@angular/core';
import {MainService} from "../../service/main.service";
import {Product} from "../../interface/product.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-not-found',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  products: Product[] = [];

  responsiveOptions: any[] = [];

  constructor(private productService: MainService, private router: Router) {}

  ngOnInit() {
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  navigate(id: string) {
    this.router.navigate(['/detail', id])
  }

  getSeverity(status: string): string {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'warning';
    }
  }

  addToStars(product: Product) {
    this.productService.addToStar(product);
  }

  openList() {
    this.router.navigate(['/table'])
  }

  addToShop(product: Product) {
    this.productService.addToBuy(product);
  }
}
