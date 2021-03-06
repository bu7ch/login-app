import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
 user$: Observable<firebase.default.User>
  constructor(private afAuth : AngularFireAuth) { 
    this.user$ = afAuth.authState
  }

  async login() {
    await this.afAuth.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider())
  }
  logout() {
    this.afAuth.signOut()
  }

  // get appUser$(): Observable<AppUser | null> {
  //   return this.user$.pipe(
      
  //   )
  // }
}
