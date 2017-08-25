import {Component, OnInit} from '@angular/core';
import {Countries} from './countries/countries';
import {CountriesServices} from './countries/countries.services';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GlobalValidator} from './GlobalValidator';
/*import {Router} from '@angular/router';*/


@Component({
	selector : 'sign-up',
	templateUrl : './signup.component.html'
})
export class SignUpComponent implements OnInit {
	country:Countries[];
	submitted:boolean = false;

	signForm: FormGroup;

	passwordChecking(g: FormGroup):{[key:string] : boolean} {
		return g.get('password1').value === g.get('password2').value ? null : {'mismatch' : true}
	}

	constructor(countryService:CountriesServices, private fb:FormBuilder) {
		this.country = countryService.getCountries();
	}

	createForm () {
		this.signForm = this.fb.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			email: ['', Validators.compose([Validators.required, GlobalValidator.mailFormat])],
			DOB: ['', Validators.required],
			passwordMatch: this.fb.group({
				password1: ['', Validators.required],
				password2: ['', Validators.required],
			}, {
				validator: this.passwordChecking
			}),
			address1: ['', Validators.required],
			address2: '',
			state: ['', Validators.required],
			zip: ['', Validators.required],
			country: ['', Validators.required],
			accType: ['', Validators.required]
		});
	}
	ngOnInit() {
		this.createForm();
	}

		
	onsubmit(form:any):void {
		for(var key in form.value) {
			/* Country determination */
			if(key=="country") {
				for(let x in this.country) {
					if(x == form.value[key]) {
						console.log("country is "+this.country[x].name);
						break;
					}
				}
			}
			/*this.routr.navigate(['showLogin']);*/
		}
		this.submitted = true;
		this.createForm();
	}

	
}