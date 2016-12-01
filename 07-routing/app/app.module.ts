import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component'
import { SpotifyService } from './spotify-service/spotify-service.service';

import { RouterModule, Routes } from '@angular/router';

import { ArtistsListComponent } from './artists-list/artists-list.component';
import { ArtistProfileComponent } from './artist-profile/artist-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'artists', pathMatch: 'full' }
  { path: 'artists', component: ArtistsListComponent, children: [
    {path: ':id', component: ArtistProfileComponent}
  ]}
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    MyApp,
    ArtistsListComponent,
    ArtistProfileComponent
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [MyApp]
})
export class MyAppModule {

}
