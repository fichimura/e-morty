import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: '../auth.scss'
})
export class SigninComponent {

  constructor(private authService: AuthService){
  }

  onSubmit(form: NgForm){
    this.authService.login({
      email: form.value.email,
      password: form.value.password
    });
  }
}
