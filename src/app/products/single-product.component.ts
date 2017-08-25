import {Component} from '@angular/core';
import {Products} from './products'
import {CounterComponent} from '../counter.component';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {ItemService} from '../services/item.service';
import 'rxjs/add/operator/switchMap';

@Component ({
	selector: 'single-product',
	templateUrl : './single-product.component.html'
})
export class SingleProductComponent{
	product:Products;
	hideElem:number;
	firstCount:number=1;
	constructor(
		private route : ActivatedRoute,
		private router: Router,
		private itemService: ItemService
	) {}

	ngOnInit() {
		this.route.paramMap
		.switchMap((params: ParamMap)=>
			this.itemService.getItem(params.get('id'))
		)
		.subscribe((item:Products)=> this.product = item);
		
	}
	addToCart(id:number, event):void {
		event.target.innerHTML="Added to Cart";
		event.target.disabled = true;
		this.itemService.addItem(id, this.firstCount);
		this.hideElem = id;
	}
	
}