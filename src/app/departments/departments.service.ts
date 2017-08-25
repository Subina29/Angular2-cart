import {Injectable} from '@angular/core';

import {DEPTS} from './mock-departments'

@Injectable() 
export class DepartmentsService {
	getDepts() {
		return DEPTS;
	}
}