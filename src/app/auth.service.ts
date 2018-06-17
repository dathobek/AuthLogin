import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth,private router: Router) { }

  // Some codes for Login Trigger!!!
  login(email:string,password:string){
    this.afAuth.auth.signInWithEmailAndPassword(email,password)
     .then(value=>{
      this.router.navigateByUrl('/profile')
     })
     .catch(err=>{
      console.log('Something went wrong ', err.message)
     })
  }

  // Some Code For EmailSignup Trigger 
  EmailSignUp(email:string,password:string){
    this.afAuth.auth.createUserWithEmailAndPassword(email,password)
    .then(value=>{
      this.router.navigateByUrl('/profile')
    })
    .catch(err=>{
      console.log('Something Went Wrong ', err.message)
    })
  }

  // Some Codes For Google Login trigger!!
  googlelogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider)
    .then(value=>{
      console.log('The Given Name is ' + value.additionalUserInfo.profile.given_name)
      this.router.navigateByUrl('/profile')
    })
    .catch(error=>{
      console.log('Something Went Wrong ', error)
    })
  }

  //Some Codes For Facebook Login Trigger!!!
  FbLogin(){ 
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider)
    .then(value=>{
      console.log('The given name is '+ value.additionalUserInfo.profile.given_name)
      this.router.navigateByUrl('/profile')
    })
    .catch(err=>{
      console.log('Something went Wrong '+ err)
    })
  }

  //Some Code added for signout
  LogOut(){
    this.afAuth.auth.signOut()
    .then(()=>{
      this.router.navigate(['/']);
    })
    
  }

// Mite need this code leter
 private oAuthLogin(provider){
   return this.afAuth.auth.signInWithPopup(provider);
 }

}
