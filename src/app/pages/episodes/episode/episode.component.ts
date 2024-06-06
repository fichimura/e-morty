import { Component, OnInit } from '@angular/core';
import { FetchApiService } from '../../../services/fetchApi.service';
import { ActivatedRoute } from '@angular/router';
import { Episode } from '../../../models/episode.model';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.scss'
})
export class EpisodeComponent implements OnInit {
  loading = false;

  episode: Episode | undefined;
  episodeId: string;

  episodeCharacters: string[] = [];

  constructor(private fetchApiService: FetchApiService, private route: ActivatedRoute){}

  ngOnInit(): void{
    this.episodeId = this.route.snapshot.paramMap.get('episodeId');
    if(this.episodeId){
      this.getEpisode();
    }
  }

  getEpisode(): void{
    this.loading = true;
    this.fetchApiService.getSubject(this.episodeId, 'episode').subscribe(
      {
      next: response => {
        this.episode = response;
        this.loading = false;
      },
      error: err => {
        console.log(err);
        this.loading = false;
      },
      complete: () =>  {
          this.episode.characters.forEach(character => {
            const partsOfUrl = character.split('/');
            const characterId = partsOfUrl[partsOfUrl.length - 1];
            this.episodeCharacters.push(characterId); 
          });
          this.loading = false;
        }
      }
    )
  }
}
