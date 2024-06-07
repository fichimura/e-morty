import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FetchApiService } from '../../services/fetchApi.service';
import { Router } from '@angular/router';
import { Character } from '../../models/character.model';
import { Location } from '../../models/location.model';
import { Episode } from '../../models/episode.model';
import { SearchParams } from '../search-box/search-box.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listing-subjects',
  templateUrl: './listing-subjects.component.html',
  styleUrl: './listing-subjects.component.scss'
})

export class ListingSubjectsComponent implements OnInit, OnDestroy {
  @Input() subjectType: string;

  getSubjectsSubscription: Subscription;

  subjects: Character[] | Location[] | Episode[] = [];
  loading = false;
  currentPage = 1;
  searchQuery = '';
  searchFilter = 'name';

  constructor(private fetchApiService: FetchApiService, private route: Router){}

  ngOnInit(): void{
    this.loadSubjects();
  }


  loadSubjects(): void {
    this.loading = true;
    this.getSubjectsSubscription = this.fetchApiService.getSubjects(this.currentPage, { [this.searchFilter]: this.searchQuery }, this.subjectType).subscribe({
      next: response =>{ 
        this.subjects = response.results;
        this.loading = false;
      },
      error: err =>{ 
        console.log(err);
        this.loading  = false;
      }
    });
  }

  loadMoreSubjects(): void {
    if (this.loading) return;
    this.loading = true;
    this.getSubjectsSubscription = this.fetchApiService.getSubjects(this.currentPage, { [this.searchFilter]: this.searchQuery }, this.subjectType).subscribe(
      {
        next: response =>{ 
          this.subjects = [...this.subjects, ...response.results]
          this.loading = false;
        },
        error:err =>{ 
          console.log(err);
          this.loading = false;
        }
      }
    );
  }

  onScroll(): void {
    this.currentPage++;
    this.loadMoreSubjects();
  }

  onSearchClicked(searchParams: SearchParams ): void{
    this.searchFilter = searchParams.searchFilter;
    this.searchQuery = searchParams.searchQuery;
    this.currentPage = 1;
    this.subjects = [];
    this.loadSubjects();
  }

  onSubjectClicked(subjectId: string): void{
    let path: string;
    if(this.subjectType === 'character'){
      path = '/character';
    }else if(this.subjectType === 'location'){
      path = '/location';
    }else if(this.subjectType === 'episode'){
      path = '/episode';
    }else{
      path='/';
      throw new Error('An error occurred when fetching this resource.');
    }
    
    this.route.navigate([path, subjectId ]);
  }

  onResetSearch(): void{
    this.searchQuery = '';
    this.searchFilter = 'name';
    this.loadSubjects();
  }

  ngOnDestroy(): void {
    if(this.getSubjectsSubscription){
      this.getSubjectsSubscription.unsubscribe();
    }
  }
}
