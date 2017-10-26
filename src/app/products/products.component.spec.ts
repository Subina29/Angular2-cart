import {async, TestBed, ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {ProductsComponent} from './products.component';
import {ItemService} from './../services/item.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable,Subject} from 'rxjs/';

class RouterStub {
	navigate(params, id) {

	}
}
class ActivatedRouteStub {
	private subject = new Subject();
	push(value) {
		this.subject.next(value);
	}
	get params() {
		return this.subject.asObservable();
	}
}

describe('ProductsComponent', () => {
	let fixture: ComponentFixture<ProductsComponent>;
	let service: ItemService;
	let component: ProductsComponent;
	let prod = {};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ProductsComponent],
			providers: [ItemService, { provide: Router, useClass:RouterStub}, {provide:ActivatedRoute, useClass:ActivatedRouteStub}]
		})
		.compileComponents();
	}));

	beforeEach(()=>{
		fixture = TestBed.createComponent(ProductsComponent);
		component = fixture.componentInstance;
		prod = {
			"itemID":1,
			"itemName":"Coaster Home Furnishings Coaster 801542 Bookcase, Barritt Collection",
			"itemImage":"/assets/product_images/test-furnishing.jpg",
			"itemPriceDollars":161,
			"itemPriceCents":66,
			"itemCategory":"Furnishings"
		};
		service = TestBed.get(ItemService);
		component.filterItem = "Furnishings";
	});

	it('should get the store items on initialization', () => {
		//let service = TestBed.get(ItemService);
		spyOn(service, 'getItems').and.returnValue([prod]);
		
		component.getStoreItems();
		fixture.detectChanges();
		expect(component.storeItems).toContain(prod);
	});

	it('should redirect the user to the product page on clicking show details', () => {
		let router = TestBed.get(Router);
		let spy = spyOn(router, 'navigate');
		let id = 1;
		let path = ['/showSingleProduct', id];
		let route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
		route.push(path);
		fixture.detectChanges();
		component.showDetails(id);
		expect(spy).toHaveBeenCalledWith(path);
	});

	xit('should show products as per the category chosen', () => {
		var e = jasmine.createSpyObj('e', [ 'preventDefault' ]);
		spyOn(service, "getCategoryItems").and.returnValue([prod]);
		component.onClick(e);
		fixture.detectChanges();
		expect(e.preventDefault).toHaveBeenCalled();
		expect(component.storeItems).toContain(prod);
	});
});
	