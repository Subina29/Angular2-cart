import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GlobalValidator} from './GlobalValidator';

@Component ({
	selector : 'login',
	templateUrl : './login.component.html' 
})
export class LoginComponent {
	loginForm: FormGroup;
	constructor(fb:FormBuilder) {
		this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, GlobalValidator.mailFormat])],
			password: ['', Validators.required]
		});
		/*this.loginForm = new FormGroup({
			email: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required)
		})*/
	}

	onSubLog(form:any):void {
		console.log(form.value);
	}
}