import {ProductsComponent} from './products.component';
import {ItemService} from '../services/item.service'
describe('ProductsComponent', ()=> {
	let prodComp : ProductsComponent;
	let service : ItemService;
	beforeEach(()=> {
		service = new ItemService();
		prodComp = new ProductsComponent(service);
	})

	it('it should get all getStoreItems from the service', ()=> {
		let spy = spyOn(service, 'getItems').and.returnValue([
		{
			"itemID":1,
			"itemName":"Coaster",
			"itemImage":"asd",
			"itemPriceDollars":161,
			"itemPriceCents":66,
			"itemCategory":"Furnishings"
		}]);
		prodComp.getStoreItems();
		expect(spy).toHaveBeenCalled();
	})
})