import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Character } from "../pages/characters/characters.model";
import { Observable } from "rxjs";

@Injectable()
export class CharacterService{
    private readonly CHARACTER_API_URL = "https://rickandmortyapi.com/api/character";

    constructor(private httpClient: HttpClient){}

    getCharacters(page: number): Observable<any>{
        return this.httpClient.get<Character[]>(`${this.CHARACTER_API_URL}?page=${page}`);
    }
}