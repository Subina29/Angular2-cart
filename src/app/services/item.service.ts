import {Injectable} from '@angular/core';
import {Products} from './../products/products';
import {PRODUCTS} from './../products/mock-products';
import {CartItemSelection} from './../cart-item-selection.interface';

@Injectable()
export class ItemService {
	prod:Products[] = [];
	selectedItems: Products[] = [];
	categoryItems:Products[] = [];
	itemArr:CartItemSelection[] = [];
	totalCost:number = 0;
	totalItemCount:number = 0;

	getItems():Products[] {
		return PRODUCTS;
	}

	getSelectedItems():Products[] {
		return this.selectedItems;
	}

	getSelectedItemArray():CartItemSelection[] {
		return this.itemArr;
	}

	getItem(itemCode):Products[] { /* itemCode is a string bcz the parameter sent over the URL is a string */
		this.prod = PRODUCTS.filter(ob=>ob.itemID == itemCode);
		return this.prod;
	}

	getCategoryItems(category:string) {
		if(category == "All" || category == "all" || category == "ALL") {
			this.categoryItems = PRODUCTS;
		}
		else {
			this.categoryItems = PRODUCTS.filter(ob=>ob.itemCategory === category);

		}
		return this.categoryItems; 
	}

	addItem(id:number, numbr:number=1):void {
		let item = PRODUCTS.find(ob => ob.itemID === id);
		if(this.selectedItems.indexOf(item) < 0) {
			this.selectedItems.push(item);

			let findInItemArr = this.itemArr.find(prod => prod.itemSelectedID === item.itemID);
			if(findInItemArr == undefined) {
	      this.itemArr.push(
	      {
	        "itemSelectedID" : item.itemID, 
	        "numOfItem" : numbr,
	        "pricePerUnit" : +(item.itemPriceDollars + '.' + item.itemPriceCents)
	      }
	      );
	    }
		}
	}

	getCount():number {
		this.totalItemCount = 0;
		for(var i = 0; i< this.itemArr.length; i++) {
			this.totalItemCount += this.itemArr[i].numOfItem;
		}
		return this.totalItemCount;
	}

	updateCount(iCode:number, change:number):void {
		for(let x in this.itemArr) {
			if(this.itemArr[x].itemSelectedID === iCode) {
				this.itemArr[x].numOfItem+= change;
			}
		}
	}

	calculateTotalCost():number {
		this.totalCost = 0;
		for(var i=0; i<this.itemArr.length; i++) {
      this.totalCost += (this.itemArr[i].pricePerUnit * this.itemArr[i].numOfItem);
    }
    return this.totalCost;
  }

	removeItem(id:number) {
		let item = this.selectedItems.find(ob => ob.itemID === id);
		let itemIndex = this.selectedItems.indexOf(item);
		let indexInSelectedItemArray = this.itemArr.find(ob => ob.itemSelectedID === id);
		this.selectedItems.splice(itemIndex,1);
		this.itemArr.splice(itemIndex,1);
	}
}
