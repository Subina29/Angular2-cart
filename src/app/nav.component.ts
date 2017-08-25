import {Component} from '@angular/core';
import {Departments} from './departments/departments';
import {DepartmentsService} from './departments/departments.service';
import {ProductsComponent} from './products/products.component';

@Component({
	selector: 'main-nav',
	templateUrl: './nav.component.html'
})
export class NavComponent {
	depts : Departments[];
	loggedIn: boolean;
	productCount:number;

	constructor(deptsService : DepartmentsService) {
		this.depts = deptsService.getDepts();
	}

	showDept:boolean = true;
	onClick(event:any) {
		event.preventDefault();
		this.showDept = false;
	}
}