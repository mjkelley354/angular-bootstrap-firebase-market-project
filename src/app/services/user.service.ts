import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore  } from '@angular/fire/firestore';
import { AppUser } from '../models/app-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore) { }

  save(user: firebase.User) {
    this.afs.doc('users/' + user.uid).set({
      name: user.displayName,
      email: user.email
    }, {merge: true});
  }

  get(uid: string): Observable<AppUser> {
    return this.afs.doc('users/' + uid).valueChanges() as Observable<AppUser>;
  }
}
