import { Observable, Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AuthData } from "../models/auth-data.model";
import { User } from "../models/user.model";

@Injectable()
export class AuthService{
    authChange = new Subject<boolean>();
    private isAuthenticated = false;
    private userId: string;

    constructor(private router: Router,private angularFireAuth: AngularFireAuth, private firestore: AngularFirestore ){}

    initAuthListener(){
        this.angularFireAuth.authState.subscribe(user =>{
            if(user){
                this.userId = user.uid;
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

    registerUser(authData: AuthData, userData: User ){
        this.angularFireAuth.createUserWithEmailAndPassword(
            authData.email,
            authData.password
        ).then(result =>{
            console.log(result);
            if(result.user){
                this.firestore.collection('users').doc(result.user.uid).set(userData)
                    .then(() => {
                        console.log("User data saved successfully");
                    }).catch(error => {
                        console.log("There was an error", error);
                    })
            }
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

    getUserData(): Observable<any>{
        return this.firestore.collection('users').doc(this.userId).valueChanges();
    }
}