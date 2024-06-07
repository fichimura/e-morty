import { Component, OnDestroy, OnInit } from '@angular/core';
import { FetchApiService } from '../../../services/fetchApi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../../models/character.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent implements OnInit, OnDestroy {
  private getMultipleSubjects: Subscription;
  private getSubjectSubscription: Subscription;
  
  loading = false;
  loadingEpisodes = false;

  character: Character | undefined;
  characterId: string;
  characterEpisodes: string[] = [];
  characterEpisodesObjects: any = [];

  constructor(private fetchApiService: FetchApiService,
              private route: ActivatedRoute,
              private router: Router){}

  ngOnInit(): void{
    this.characterId = this.route.snapshot.paramMap.get('characterId');
    if(this.characterId){
      this.getCharacter();
    }
  }

  getCharacter(): void{
    this.loading = true;
    this.getSubjectSubscription = this.fetchApiService.getSubject('character', this.characterId).subscribe(
      {
      next: response => {
        this.character = response;
        this.loading = false;
      },
      error: err => {
        console.log(err);
        this.loading = false;
      },
      complete: () =>  {
          this.character.episode.forEach(episode => {
            const partsOfUrl = episode.split('/');
            const episodeNumber = partsOfUrl[partsOfUrl.length - 1];
            this.characterEpisodes.push(episodeNumber); 
          });
          this.loading = false;
          this.loadCharacterEpisodes(this.characterEpisodes);
        }
      }
    )
  }

  loadCharacterEpisodes(episodesIds: string[]): void{
    this.loadingEpisodes = true;
    this.getMultipleSubjects = this.fetchApiService.getMultipleSubjects('episode', episodesIds).subscribe({
      next: response => {
        this.characterEpisodesObjects = response;
        this.loadingEpisodes = false;
      },
      error: error => {
        console.log(error);
        this.loadingEpisodes = false;
      }
    });
  }

  onLocationClicked(locationUrl: string): void{
    const locationId = locationUrl.split('/').pop();
    this.router.navigate(['/location', locationId]);
  }

  onOriginClicked(locationUrl: string): void{
    const locationId = locationUrl.split('/').pop();
    this.router.navigate(['/location', locationId]);
  }

  onEpisodeSelected(episodeId: string): void{
    this.router.navigate(['/episode', episodeId]);
  }

  ngOnDestroy(): void {
    this.getSubjectSubscription.unsubscribe();
    this.getMultipleSubjects.unsubscribe();
  }
}
