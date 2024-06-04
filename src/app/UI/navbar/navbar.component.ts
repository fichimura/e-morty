import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuth = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService){}

  ngOnInit(): void{
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  onLogout(): void{
    this.authService.logout();
  }

  ngOnDestroy(): void{
    this.authSubscription.unsubscribe();
  }
}
