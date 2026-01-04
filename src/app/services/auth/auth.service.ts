import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  User,
  user,
} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  $user: Observable<User | null>;

  constructor(private firebaseAuth: Auth) {
    this.$user = user(this.firebaseAuth);
  }

  createUser(email: string, password: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    )
      .then((userCredentials) =>
        console.log(`User ${userCredentials.user.email} was created`)
      )
      .catch((reason) =>
        console.log(`Error ${reason.code}: ${reason.message}`)
      );

    return from(promise);
  }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    )
      .then((userCredentials) => {
        console.log(`User ${userCredentials.user.email} Signed in`);
      })
      .catch((reason) =>
        console.log(`Error ${reason.code}: ${reason.message}`)
      );

    return from(promise);
  }

  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth)
      .then(() => console.log('User Signed out'))
      .catch((reason) =>
        console.log(`Error ${reason.code}: ${reason.message}`)
      );

    return from(promise);
  }
}
