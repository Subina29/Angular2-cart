import {Component, OnInit} from '@angular/core';
import {Products} from './products';
import {ItemService} from './../services/item.service';
import {Router} from '@angular/router' 

@Component({
	selector: 'products',
	templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
	storeItems: Products[] = [];
	//cartItems : Products[] = [];
	added:boolean = false;
	hideElem:number;
	filterItem:string = '';
	constructor(
		private itemService : ItemService, 
		private router : Router
	) {}
	
	getStoreItems(): void {
		this.storeItems = this.itemService.getItems();
	}

	ngOnInit():void {
		this.getStoreItems();
	}
	
	addToCart(id:number, event):void {
		event.target.innerHTML="Added to Cart";
		event.target.disabled = true;
		this.itemService.addItem(id);
		//this.cartItems = this.itemService.getSelectedItems();
		this.hideElem = id;
	}	

	/*onSelect(value:string) {
		this.filterItem = value;
		this.storeItems = this.itemService.getCategoryItems(value);
	}*/
	
	onClick(event) {
		event.preventDefault();
		this.filterItem = event.target.innerHTML;
		this.storeItems = this.itemService.getCategoryItems(event.target.innerHTML);
	}

	showDetails(itemCode:number):void {
		this.router.navigate(['/showSingleProduct', itemCode ]);
	}
}
