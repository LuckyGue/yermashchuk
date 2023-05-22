import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Route, Router} from "@angular/router";
import {MainService} from "./service/main.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  items: MenuItem[] = [];

  constructor(private router: Router, private mainService: MainService) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Main',
        command: event => {
          this.router.navigate(['/main'])
        },
      },
      {
        label: 'Список',
        icon: 'pi pi-fw pi-list',
        command: event => {
          this.router.navigate(['/table'])
        },
      },
      // {
      //   label: 'Users',
      //   icon: 'pi pi-fw pi-user',
      //   items: [
      //     {
      //       label: 'New',
      //       icon: 'pi pi-fw pi-user-plus'
      //     },
      //     {
      //       label: 'Delete',
      //       icon: 'pi pi-fw pi-user-minus'
      //     },
      //     {
      //       label: 'Search',
      //       icon: 'pi pi-fw pi-users',
      //       items: [
      //         {
      //           label: 'Filter',
      //           icon: 'pi pi-fw pi-filter',
      //           items: [
      //             {
      //               label: 'Print',
      //               icon: 'pi pi-fw pi-print'
      //             }
      //           ]
      //         },
      //         {
      //           icon: 'pi pi-fw pi-bars',
      //           label: 'List'
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   label: 'Events',
      //   icon: 'pi pi-fw pi-calendar',
      //   items: [
      //     {
      //       label: 'Edit',
      //       icon: 'pi pi-fw pi-pencil',
      //       items: [
      //         {
      //           label: 'Save',
      //           icon: 'pi pi-fw pi-calendar-plus'
      //         },
      //         {
      //           label: 'Delete',
      //           icon: 'pi pi-fw pi-calendar-minus'
      //         }
      //       ]
      //     },
      //     {
      //       label: 'Archieve',
      //       icon: 'pi pi-fw pi-calendar-times',
      //       items: [
      //         {
      //           label: 'Remove',
      //           icon: 'pi pi-fw pi-calendar-minus'
      //         }
      //       ]
      //     }
      //   ]
      // },
      {
        label: 'Exceptions',
        icon: 'pi pi-spin pi-cog',
        items: [
          {
            label: 'NotFound',
            command: event => this.router.navigate(["/404"])
          },
        ]
      }
    ];
  }

  get starsCount() {
    return this.mainService.stars.length;
  }

  get shopCount() {
    return this.mainService.shoppingCart.length;
  }

  toStars() {
    this.router.navigate(['stars'])
  }

  toShop() {
    this.router.navigate(['shop'])
  }
}
