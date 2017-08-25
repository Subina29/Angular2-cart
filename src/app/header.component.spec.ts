import {HeaderComponent} from './header.component';

describe('HeaderComponent', ()=> {
	let comp : HeaderComponent;

	it('should put the value of searchValue as whatever it gets', ()=> {
		comp = new HeaderComponent();
		comp.findProd("Success");
		expect(comp.searchValue).toBe("Success");
	})
})