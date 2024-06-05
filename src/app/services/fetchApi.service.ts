import { HttpClient } from "@angular/common/http";
import { Injectable, Input } from "@angular/core";
import { Character } from "../models/character.model";
import { Location } from "../models/location.model";
import { Episode } from "../models/episode.model";

import { Observable } from "rxjs";
import { url } from "inspector";

@Injectable()
export class FetchApiService{
    private readonly API_URL = "https://rickandmortyapi.com/api";

    constructor(private httpClient: HttpClient){}

    getSubjects( page: number, filters: any = {}, subjectType: string): Observable<any>{
      let urlToFetch = `${this.API_URL}/${subjectType}/?page=${page}`;

        Object.keys(filters).forEach(key => {
          if (filters[key]) {
            urlToFetch += `&${key}=${filters[key]}`;
          }
        });
        console.log('URL:',urlToFetch);
        return this.httpClient.get(urlToFetch);
    }

    getSubject(subjectId :string, subjectType: string): Observable<any>{
        return this.httpClient.get(`${this.API_URL}/${subjectType}/${subjectId}`);
    }
}