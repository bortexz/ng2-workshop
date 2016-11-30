import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { NgModule } from '@angular/core';
import { MyApp } from './app.component'
import { TodoItem } from './todo-item-component/todo-item.component';
import { TodoForm } from './todo-form-component/todo-form.component';
import { TodoList } from './todo-list-component/todo-list.component';
import { TodoService } from './todo-service/todo.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    MyApp,
    TodoItem,
    TodoForm,
    TodoList
  ],
  providers: [
    TodoService
  ],
  bootstrap: [MyApp]
})
export class MyAppModule {

}
