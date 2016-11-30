import { Component } from '@angular/core';
import {TodoService} from '../todo-service/todo.service';

@Component({
  selector: 'todo-form',
  template: `
    <input type='text' [(ngModel)]='newTodo'>
    <button (click)='addTodo()'>Add todo</button>
  `
})
export class TodoForm {
  newTodo: string;
  constructor(private todoService: TodoService) {}

  addTodo () {
    this.todoService.addTodo(this.newTodo);
  }
}