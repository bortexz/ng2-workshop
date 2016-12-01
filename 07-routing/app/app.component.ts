import { Component, ViewChild } from '@angular/core'
import { SpotifyService } from './spotify-service/spotify-service.service';
import { FormControl } from '@angular/forms'
import {Observable} from 'rxjs';

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class MyApp {
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