import {Component} from '@angular/core';

@Component({
	selector: 'my-project',
	template: `
		<my-head></my-head>
		<router-outlet></router-outlet>
		<my-footer></my-footer>
	`
})
export class AppComponent {}
