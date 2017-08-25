import {Component, OnInit} from '@angular/core';
import {Products} from './products';
import {ItemService} from './../services/item.service';
import {CounterComponent} from './../counter.component';
import {CartItemSelection} from './../cart-item-selection.interface';

@Component({
	selector: 'cart',
	templateUrl : './cart.component.html'
})
export class CartComponent implements OnInit{
	cartItems:Products[] = [];
	selectedItems:CartItemSelection[] = [];
	totalCost:number = 0;
	firstCount:number = 1; /* for the counter in the counter.component */

	constructor(private itemService:ItemService) {}

	ngOnInit():void {
		this.cartItems = this.itemService.getSelectedItems();
		this.totalCost = this.itemService.calculateTotalCost();
		this.selectedItems = this.itemService.getSelectedItemArray();
	}

	calc():void {
		this.totalCost = 0;
		this.totalCost = this.itemService.calculateTotalCost();
	}
	
	removeItem(event, item:number):void {
		event.preventDefault();
		this.itemService.removeItem(item);
	}
}