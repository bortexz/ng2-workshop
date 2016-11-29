import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {
  private _todos = []

  addTodo (item) {
    this._todos.push(item)
  }

  get todos () {
    return this._todos;
  }
}