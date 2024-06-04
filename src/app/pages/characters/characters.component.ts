import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from './characters.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent implements OnInit{  
  characters: Character[];
  loading = false;
  currentPage = 1;

  constructor(private characterService: CharacterService, private route: Router){}

  ngOnInit(): void{
    this.loadCharacters();
  }

  onScroll(): void {
    this.currentPage++;
    this.loadMoreCharacters();
  }

  loadCharacters(): void {
    this.loading = true;
    this.characterService.getCharacters(this.currentPage).subscribe({
      next: response => this.characters = response.results,
      error: err => console.log(err),
      complete: () => this.loading = false
    });
  }

  loadMoreCharacters(): void {
    if (this.loading) return;
    this.loading = true;
    this.characterService.getCharacters(this.currentPage).subscribe(
      {
        next: response => this.characters = [...this.characters, ...response.results],
        error:err => console.log(err),
        complete: () => this.loading = false
      }
    );
  }

  onCharacterClicked(characterId: string): void{
    this.route.navigate(['/character', characterId]);
  }
}
