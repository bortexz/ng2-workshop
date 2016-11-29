import {Component} from '@angular/core'

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})

export class MyApp {
  todos = []
  newTodo: string;

  addTodo () {
    if (this.newTodo) {
      this.todos.push(this.newTodo)
    }
  }

}