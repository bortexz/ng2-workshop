import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify-service/spotify-service.service';


@Component({
  selector: 'artist-profile',
  template: `{{artist | async | json}}`
})
export class ArtistProfileComponent implements OnInit {
  artist
  constructor (private route: ActivatedRoute, private spotifyService: SpotifyService) {}

  ngOnInit () {
    this.route.params.subscribe(params => {
      this.artist = this.spotifyService.getArtistById(params['id'])
    })
  }
}