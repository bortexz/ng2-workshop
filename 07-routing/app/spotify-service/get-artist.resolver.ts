import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { SpotifyService } from './spotify-service.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class GetArtistResolver implements Resolve<any> {
  constructor(private spotifyService: SpotifyService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.spotifyService.getArtistById(route.params['id']);
  }
}