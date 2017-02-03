import { Component } from '@angular/core';
import {Todo} from './todo';

const TODOS: Todo[] = [
  { id: 1, task: 'Walk dog', status: false },
  { id: 2, task: 'Finish website', status: true},
  { id: 3, task: 'Learn Angular 2', status: false}
];

@Component({
	moduleId: module.id,
  selector: 'my-app',
  templateUrl: './templates/appComponent.html',
  styleUrls: ['./styles/appComponent.css']

})

export class AppComponent {
	title = 'My Todo List';
	todos = TODOS;

	// selectStudent(studentParam:Student){
	// 	this.currentStudent = studentParam;
	// }

  delete(clickedTodo:Todo){
    if (!clickedTodo) { return; }
    for(var i=0; i < TODOS.length; i++) {
        console.log(TODOS[i]);
       if(TODOS[i].task == clickedTodo.task )
       {  
          TODOS.splice(i,1);
       }
    }
  }

  add(task: string): void {
    task = task.trim();
    if (!task) { return; }
    TODOS.push({id: 1, task: task, status: false });
  }
}
