import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: '../auth.scss'
})
export class SignupComponent {
  signedUpSuccessfully: boolean = true;
  errorMessage: string;

  constructor(private authService: AuthService){}

  onSubmit(form: NgForm): void{
    this.authService.registerUser(
      {
        email: form.value.email,
        password: form.value.password
      },
      {
        name: form.value.name,
        country: form.value.country,
        email: form.value.email
      }
    ).then(result =>{
      this.signedUpSuccessfully = true;
    }).catch(error => {
      this.signedUpSuccessfully = false;
      this.errorMessage = this.handleSignUpError(error.code);
    });
  }

  handleSignUpError(code: string): string{
    switch(code){
      case 'auth/internal-error' : {
        return 'An internal error has occurred. Try to sign again, and if the error persists contact us.'
      }case 'auth/invalid-email': {
        return 'You provided an invalid email. Insert a valid one and try sign in again.';
      }case 'auth/missing-password': {
        return 'You must provide a password to sign in. Fill the password field and try sign in again.';
      }case 'auth/invalid-password': {
        return 'The password that you provided is invalid. The password must be at least six characters. Review it and try sign in again.'
      }case 'auth/invalid-credential' : {
        return 'Email or password incorrect. Review both and try sign in again.'
      }default:{
        return 'There was an error when sign in. Try again.';
      }
    }
  }

}
