import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SpotifyService {
  searchUrl: String = 'https://api.spotify.com/v1/search?type=artist&q=';
  artistUrl: String = 'https://api.spotify.com/v1/artists/';
  constructor (private http: Http) {}

  public getArtistsByQuery (query) {
    return this.http.get(`${this.searchUrl}${query}`).map(res => res.json())
  }

  public getArtistById (id) {
    return this.http.get(`${this.artistUrl}${id}`).map(res => res.json())
  }
}
