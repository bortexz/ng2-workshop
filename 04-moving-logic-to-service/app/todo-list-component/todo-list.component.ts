import { Component, Input } from '@angular/core';
import { TodoService } from '../todo-service/todo.service';

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <li *ngFor='let todo of todoService.todos'>
        <todo-item [todo]='todo'></todo-item>
      </li>
    </ul>
  `
})
export class TodoList {
  constructor(private todoService: TodoService) {}
}