import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SpotifyService {
  spotifyUrl: String = 'https://api.spotify.com/v1/search?type=artist&q=';
  constructor (private http: Http) {}

  public getArtistsByQuery (query) {
    return this.http.get(`${this.spotifyUrl}${query}`).map(res => res.json())
  }
}
