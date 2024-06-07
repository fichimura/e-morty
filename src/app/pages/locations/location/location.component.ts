import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '../../../models/location.model';
import { FetchApiService } from '../../../services/fetchApi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent implements OnInit, OnDestroy{
  getMultipleSubjects: Subscription;
  getSubjectSubscription: Subscription;
  
  loading = false;
  loadingResidents = false;

  location: Location | undefined;
  locationId: string;
  locationResidents: string[] = [];
  locationResidentsObjects: any = [];

  constructor(private fetchApiService: FetchApiService,
              private route: ActivatedRoute,
              private router: Router){}

  ngOnInit(): void{
    this.locationId = this.route.snapshot.paramMap.get('locationId');
    if(this.locationId){
      this.getLocation();
    }
  }

  getLocation(): void{
    this.loading = true;
    this.getSubjectSubscription =  this.fetchApiService.getSubject('location', this.locationId).subscribe(
      {
      next: response => {
        this.location = response;
        this.loading = false;
      },
      error: err => {
        console.log(err);
        this.loading = false;
      },
      complete: () =>  {
          this.location.residents.forEach(resident => {
            const partsOfUrl = resident.split('/');
            const residentId = partsOfUrl[partsOfUrl.length - 1];
            this.locationResidents.push(residentId); 
          });
          this.loading = false;
          this.loadResidentsNames(this.locationResidents);
        }
      }
    )
  }

  loadResidentsNames(locationResidentsIds: string[]): void{
    this.loadingResidents = true;
    this.getMultipleSubjects = this.fetchApiService.getMultipleSubjects('character', locationResidentsIds).subscribe({
      next: response => {
        this.locationResidentsObjects = response;
        this.loadingResidents = false;
      },
      error: error => {
        console.log(error);
        this.loadingResidents = false;
      }
    });
  }

  onResidentSelected(characterId: string): void{
    this.router.navigate(['/character', characterId]);
  }

  ngOnDestroy(): void {
    this.getSubjectSubscription.unsubscribe();
    this.getMultipleSubjects.unsubscribe();
  }
}
