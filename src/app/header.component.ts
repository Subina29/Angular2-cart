import {Component} from '@angular/core';

@Component ({
	selector : 'my-head',
	templateUrl : './header.component.html'
})

export class HeaderComponent {
	title = "LOGO";
	searchValue:any = '';
	findProd(searchItem:string) {
		this.searchValue = searchItem;
	}
}
