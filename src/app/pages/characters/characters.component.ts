import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from './characters.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent implements OnInit{
  // @ViewChild('characterList', { static: false }) characterList: ElementRef;
  
  characters: Character[];
  loading = false;
  currentPage = 1;

  constructor(private characterService: CharacterService){}

  ngOnInit(){
    this.loadCharacters();
  }

  onScroll() {
    this.currentPage++;
    this.loadMoreCharacters();
    // const element = this.characterList.nativeElement;
    // if (element.scrollHeight - element.scrollTop === element.clientHeight) {
    //   this.loadMoreCharacters();
    // }
  }

loadCharacters() {
  this.loading = true;
  this.characterService.getCharacters(this.currentPage).subscribe({
    next: response => this.characters = response.results,
    error: err => console.log(err),
    complete: () => this.loading = false
  });
}


  loadMoreCharacters() {
    console.log('entered');
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
}
