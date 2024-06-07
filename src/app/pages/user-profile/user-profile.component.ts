import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit, OnDestroy {
  private getUserSubscription: Subscription;
  
  user: any;
  loadingUserData = false;
  hasError = false;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.loadingUserData = true;
    this.getUserSubscription = this.authService.getUserData().subscribe({
      next: userData => {
        this.user = userData;
        this.loadingUserData = false;
      },
      error: error => {
        this.hasError = true;
        this.loadingUserData = false;
      }
    });
  }

  ngOnDestroy(): void {
    if(this.getUserSubscription){
      this.getUserSubscription.unsubscribe();      
    }
  }
}
