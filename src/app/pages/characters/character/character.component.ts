import { Component, OnDestroy, OnInit } from '@angular/core';
import { FetchApiService } from '../../../services/fetchApi.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../../models/character.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent implements OnInit, OnDestroy { 
  getSubjectSubscription: Subscription;
  
  loading = false;

  character: Character | undefined;
  characterId: string;
  characterEpisodes: string[] = [];

  constructor(private fetchApiService: FetchApiService, private route: ActivatedRoute){}

  ngOnInit(): void{
    this.characterId = this.route.snapshot.paramMap.get('characterId');
    if(this.characterId){
      this.getCharacter();
    }
  }

  getCharacter(): void{
    this.loading = true;
    this.getSubjectSubscription = this.fetchApiService.getSubject(this.characterId, 'character').subscribe(
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
          })

          this.loading = false;
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.getSubjectSubscription.unsubscribe();
  }
}
