import {Component, Input} from '@angular/core';

import {Student} from './student';

@Component({
	selector : 'student-detail',
	template :`<div *ngIf='currentStudent'>
				<h2 class="details">Details of {{currentStudent.lastName}}  {{currentStudent.name}}</h2>
				  <div><label>ID: </label>{{currentStudent.id}}</div>
				  <div><label>Name: </label><input [(ngModel)]="currentStudent.name" type="text"></div>
				  <div><label>lastName: </label><input [(ngModel)]="currentStudent.lastName" type="text"></div>
				</div>`	
})

export class StudentDetailComponent{
	@Input()
		currentStudent:Student;
}