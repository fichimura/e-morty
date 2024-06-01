import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: '../auth.scss'
})
export class SigninComponent {

  onSubmit(form: NgForm){
    console.log('form:', form);
  }
}
