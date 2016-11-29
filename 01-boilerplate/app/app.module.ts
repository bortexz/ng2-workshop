import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { NgModule } from '@angular/core';
import { MyApp } from './app.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [MyApp],
  bootstrap: [MyApp]
})
export class MyAppModule {

}
