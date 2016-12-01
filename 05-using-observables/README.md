# 05 Using observables and async pipe

When using a service to retrieve a resource from somewhere, it will usually come asyncronously.

In Angular 2, it is recommended to use rxjs Observables for asyncronous data coming. We will see that the http module from Angular 2 is returning observables instead of Promises.

## Returning observables as source of data

In our service, when we want to retrieve todos, we can do the following to convert it into Observable. As this array is already defined,
it doesn't make too much sense. But we will see that from this to an http async request is straight forward :)

```typescript
...
import {Observable} from 'rxjs';

@Injectable
export class myService {
  _items = ['item1', 'item2']
  ...
  get items () {
    return Observable
      .of(this._items)
      .delay(2000)
  }
}
```

The delay will be useful to prove that it is indeed asynchronous!

## Using the async pipe

Now, it's moment to subscribe to this into our component. We will make the private variable todos
equal to the todoService todos, which is an observable like the one above.

To specify on the *ngFor directive that we are waiting for async data, we can use the async pipe like this (We will cover other pipes latee):

`*ngFor='let todo of todos | async'` This way Angular will know is expecting async data.

```typescript
import { Component, Input } from '@angular/core';
import { TodoService } from '../todo-service/todo.service';

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <li *ngFor='let todo of todos | async'>
        <todo-item [todo]='todo'></todo-item>
      </li>
    </ul>
  `
})
export class TodoList {
  todos
  constructor(private todoService: TodoService) {
    this.todos = todoService.todos
  }
}
```
