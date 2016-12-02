import { Component } from '@angular/core';
import { SpotifyService } from '../spotify-service/spotify-service.service';
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs'

@Component({
  template: `
    <div>
      <input type='text' placeholder='search artist...' [formControl]='searchControl' />

      <div *ngFor='let artist of artists | async'>
        <a [routerLink]="['/artists', artist.id]">{{ artist.name }}</a>
      </div>

      <router-outlet></router-outlet>
    </div>
  `,
  selector: 'artists-list'
})
export class ArtistsListComponent {
  artists: Observable<any>;
  searchControl = new FormControl()

  constructor (private spotifyService: SpotifyService) {
    this.artists = this.searchControl.valueChanges
      .filter(data => data.length > 2)
      .debounceTime(200)
      .switchMap(data => this.spotifyService.getArtistsByQuery(data))
      .map(data => data.artists.items)

      this.searchControl.valueChanges
      .filter(data => data.length > 2)
      .debounceTime(200)
      .switchMap(data => this.spotifyService.getArtistsByQuery(data))
      .map(data => data.artists.items)
      .subscribe(data => console.log(data))
  }
}