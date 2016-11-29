import {Component} from '@angular/core'

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})

export class MyApp {
  todos = []
  newTodo: string;

  addTodo () {
    console.log(this.newTodo)
    if (this.newTodo) {
      this.todos.push(this.newTodo)
    }
  }

}