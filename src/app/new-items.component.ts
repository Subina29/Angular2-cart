import {Component} from '@angular/core';
import {NewItems} from './new-items';

@Component({
	selector: 'new-items',
	templateUrl : './new-items.component.html'
})
export class NewItemsComponent {
	featItems:NewItems[] = [
		{
			"tagLine": "Get used or new whatever fits you", 
			"items": "Furnishings, Instruments, Equipments", 
			"productLink": "showProducts", 
			"productLinkText": "Shop for it now!", 
			"productLink1": "showProducts", 
			"img1": "../assets/images/equipments-home.jpeg", 
			"productLink2": "showProducts",
			"img2" : "../assets/images/furnishings-home.jpeg", 
			"productLink3": "showProducts",
			"img3": "../assets/images/instruments-home.jpeg"
		},
		{
			"tagLine":"Deals of the day", 
			"items": "Paintings, Instruments", 
			"productLink": "showProducts",
			"productLinkText": "Shop for it now!", 
			"productLink1": "showProducts",
			"img1": "../assets/images/paintings-home.jpg",  
			"productLink2": "showProducts",
			"img2" : "../assets/images/furnishings2-home.jpg",
			"productLink3": "showProducts",
			"img3": "../assets/images/instruments2-home.jpeg"
			}
		
	];
}