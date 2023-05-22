import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {ToastModule} from "primeng/toast";
import {ConfirmationService, MessageService} from "primeng/api";
import {NotFoundComponent} from "./component/not-found/not-found.component";
import {MenubarModule} from "primeng/menubar";
import {MainComponent} from "./component/main/main.component";
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {ButtonModule} from "primeng/button";
import {ImageModule} from "primeng/image";
import {DetailComponent} from "./component/detail/detail.component";
import {ChipModule} from "primeng/chip";
import {RippleModule} from "primeng/ripple";
import {TableComponent} from "./component/table/table.component";
import {RatingModule} from "primeng/rating";
import {DataViewModule} from "primeng/dataview";
import {FormsModule} from "@angular/forms";
import {SelectButtonModule} from "primeng/selectbutton";
import {DropdownModule} from "primeng/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StarsTableComponent} from "./component/stars/stars-table.component";
import {ShoppingCartComponent} from "./component/shopping-cart/shopping-cart.component";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    DetailComponent,
    MainComponent,
    TableComponent,
    StarsTableComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    ConfirmPopupModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: '/main'},
      {path: 'main', component: MainComponent},
      {path: 'table', component: TableComponent},
      {path: 'stars', component: StarsTableComponent},
      {path: 'shop', component: ShoppingCartComponent},
      {path: 'detail/:id', component: DetailComponent},
      {path: '404', component: NotFoundComponent},
      {path: '**', redirectTo: '/404'}
    ]),
    ToastModule,
    MenubarModule,
    CarouselModule,
    TagModule,
    ButtonModule,
    ImageModule,
    ChipModule,
    RippleModule,
    RatingModule,
    DataViewModule,
    FormsModule,
    SelectButtonModule,
    DropdownModule,
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
