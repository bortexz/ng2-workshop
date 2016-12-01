import { Component } from '@angular/core';
import { SpotifyService } from '../spotify-service/spotify-service.service';
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs'

@Component({
  template: `
    <input type='text' placeholder='search artist...' [formControl]='searchControl'>

    <div *ngFor='let artist of artists | async'>
      {{ artist.name }}
    </div>

    <router-outlet></router-outlet>
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
  }
}