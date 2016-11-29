import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { NgModule } from '@angular/core';
import { MyApp } from './app.component'
import { TodoItem } from './todo-item/todo-item.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    MyApp,
    TodoItem
  ],
  bootstrap: [MyApp]
})
export class MyAppModule {

}
