import { Component } from '@angular/core';
import {MainService} from "../../service/main.service";
import {Product} from "../../interface/product.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-not-found',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  product?: Product;

  responsiveOptions: any[] = [];

  constructor(private productService: MainService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe({
      next: (params) => {
        const id = params['id'];
        if (id) {
          this.productService.getProducts().then((products) => {
            this.product = products.find(e => e.id === id);
          });
        }
      }
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
    this.productService.addToStar(product)
  }
}
