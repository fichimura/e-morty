import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit, OnDestroy {
  getUserSubscription: Subscription;
  
  user: any;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.getUserSubscription = this.authService.getUserData().subscribe(userData => {
      this.user = userData;
    });
  }

  ngOnDestroy(): void {
    this.getUserSubscription.unsubscribe();
  }
}
