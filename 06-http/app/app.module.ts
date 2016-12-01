import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component'
import { SpotifyService } from './spotify-service/spotify-service.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    MyApp
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [MyApp]
})
export class MyAppModule {

}
