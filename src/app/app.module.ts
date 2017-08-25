import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
/* For departments */
import {DepartmentsService} from './departments/departments.service';
/* For Countries */
import {CountriesServices} from './countries/countries.services';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ItemService} from './services/item.service';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header.component';
import {NavComponent} from './nav.component';
import {SignUpComponent} from './signup.component';
import {LoginComponent} from './login.component';
import { RouterModule, Routes } from '@angular/router';
import {CarouselComponent} from './carousel/carousel.component';
import {HomepageComponent} from './homepage.component';
import {NewItemsComponent} from './new-items.component';
import {ProductsComponent} from './products/products.component';
import {CartComponent} from './products/cart.component';
import {CounterComponent} from './counter.component';
import {DefaultComponent} from './default.component';
import {SingleProductComponent} from './products/single-product.component';
import {FooterComponent} from './footer.component'


const appRoutes: Routes = [
	{path:'showHome', component: HomepageComponent},
	{path:'showAbout', redirectTo:'/showHome', pathMatch: "full"},
	{path:'showCareers', redirectTo:'/showHome', pathMatch: "full"},
	{path:'showLogin', component: LoginComponent },
	{path:'showCart', component: CartComponent},
	{path:"signIn", component:SignUpComponent},
	{path:"showProducts", component:ProductsComponent},
	{path:"showSingleProduct/:id", component: SingleProductComponent},
	{path:"", redirectTo:"/showHome", pathMatch: "full"}
]

@NgModule({
	imports : [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [DepartmentsService, CountriesServices, ItemService],
	declarations : [AppComponent, HeaderComponent, NavComponent, SignUpComponent, LoginComponent, CarouselComponent, HomepageComponent, NewItemsComponent, ProductsComponent, CartComponent, CounterComponent, DefaultComponent, SingleProductComponent, FooterComponent],
	bootstrap : [AppComponent]
})
export class AppModule{}