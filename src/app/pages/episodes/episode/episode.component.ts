import { Component, OnDestroy, OnInit } from '@angular/core';
import { FetchApiService } from '../../../services/fetchApi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Episode } from '../../../models/episode.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.scss'
})
export class EpisodeComponent implements OnInit, OnDestroy {
  private getMultipleSubjects: Subscription;
  private getSubjectSubscription: Subscription;
  
  loading = false;
  loadingCharacters = false;
  hasError = false;

  episode: Episode | undefined;
  episodeId: string;
  episodeCharacters: string[] = [];
  episodeCharactersObjects: any = [];

  constructor(private fetchApiService: FetchApiService,
              private route: ActivatedRoute,
              private router: Router){}

  ngOnInit(): void{
    this.episodeId = this.route.snapshot.paramMap.get('episodeId');
    if(this.episodeId){
      this.getEpisode();
    }
  }

  getEpisode(): void{
    this.loading = true;
    this.getSubjectSubscription =  this.fetchApiService.getSubject('episode', this.episodeId).subscribe(
      {
      next: response => {
        this.episode = response;
        this.loading = false;
      },
      error: err => {
        this.hasError = true;
        this.loading = false;
      },
      complete: () =>  {
          this.episode.characters.forEach(character => {
            const partsOfUrl = character.split('/');
            const characterId = partsOfUrl[partsOfUrl.length - 1];
            this.episodeCharacters.push(characterId); 
          });
          this.loading = false;
          this.loadCharacterNames(this.episodeCharacters);
        }
      }
    );
  }

  loadCharacterNames(characterIds: string[]): void{
    this.loadingCharacters = true;
    this.getMultipleSubjects = this.fetchApiService.getMultipleSubjects('character', characterIds).subscribe({
      next: response => {
        if(Array.isArray(response)){
          this.episodeCharactersObjects = response;
        }else{
          this.episodeCharactersObjects = [response];
        }
        
        this.loadingCharacters = false;
      },
      error: error => {
        this.hasError = true;
        this.loadingCharacters = false;
      }
    });
  }

  onCharacterSelected(characterId: string): void{
    this.router.navigate(['/character', characterId]);
  }

  ngOnDestroy(): void {
    if(this.getSubjectSubscription){
      this.getSubjectSubscription.unsubscribe();
    }
    if(this.getMultipleSubjects){
      this.getMultipleSubjects.unsubscribe();
    }
  }
}
