import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../characters/characters.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent implements OnInit {
  loading = false;

  character: Character | undefined;
  characterId: string;

  characterEpisodes: string[] = [];

  constructor(private characterService: CharacterService, private route: ActivatedRoute){}

  ngOnInit(){
    this.characterId = this.route.snapshot.paramMap.get('characterId');
    if(this.characterId){
      this.getCharacter(this.characterId);
    }
  }

  getCharacter(characterId: string): void{
    this.loading = true;
    this.characterService.getCharacter(this.characterId).subscribe(
      {
      next: response => this.character = response,
      error: err => console.log(err),
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


}