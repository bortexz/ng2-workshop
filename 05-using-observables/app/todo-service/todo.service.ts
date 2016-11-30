import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {
  private _todos: Array<String> = ['one-task', 'second-task'];

  addTodo (todo) {
    this._todos.push(todo)
  }

  get todos () {
    return Observable
      .of(this._todos)
      .delay(2000)
  }
}