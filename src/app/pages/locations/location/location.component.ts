import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '../../../models/location.model';
import { FetchApiService } from '../../../services/fetchApi.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent implements OnInit, OnDestroy{
  getSubjectSubscription: Subscription;
  
  loading = false;

  location: Location | undefined;
  locationId: string;
  locationResidents: string[] = [];

  constructor(private fetchApiService: FetchApiService, private route: ActivatedRoute){}

  ngOnInit(): void{
    this.locationId = this.route.snapshot.paramMap.get('locationId');
    if(this.locationId){
      this.getLocation();
    }
  }

  getLocation(): void{
    this.loading = true;
    this.getSubjectSubscription =  this.fetchApiService.getSubject(this.locationId, 'location').subscribe(
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
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.getSubjectSubscription.unsubscribe();
  }
}
