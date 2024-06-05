import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AuthData } from "../models/auth-data.model";

@Injectable()
export class AuthService{
    authChange = new Subject<boolean>();
    private isAuthenticated = false;

    constructor(private router: Router,private angularFireAuth: AngularFireAuth ){}

    initAuthListener(){
        this.angularFireAuth.authState.subscribe(user =>{
            if(user){
                this.isAuthenticated = true;
                this.authChange.next(true);
                this.router.navigate(['/']);
            }else{
                this.authChange.next(false);
                this.router.navigate(['/signin']);
                this.isAuthenticated = false;
            }
        })
    }

    registerUser(authData: AuthData){
        this.angularFireAuth.createUserWithEmailAndPassword(
            authData.email,
            authData.password
        ).then(result =>{
            console.log(result);
        }).catch(error => {
            console.log(error);
        });
    }

    login(authData: AuthData){
        this.angularFireAuth.signInWithEmailAndPassword(
            authData.email,
            authData.password
        ).then(result =>{
            console.log(result);
        }).catch(error => {
            console.log(error);
        });
    }

    logout(){
        this.angularFireAuth.signOut();
    }

    isAuth(){
        return this.isAuthenticated;
    }
}