import { HttpClient } from "@angular/common/http";
import { Injectable} from "@angular/core";

import { Observable } from "rxjs";

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

      return this.httpClient.get(urlToFetch);
    }

    getSubject(subjectType: string, subjectId :string): Observable<any>{
        return this.httpClient.get(`${this.API_URL}/${subjectType}/${subjectId}`);
    }

    getMultipleSubjects(subjectType: string, subjectListItem: string[] ): Observable<any>{
      return this.httpClient.get(`${this.API_URL}/${subjectType}/${subjectListItem}`);
    }
}