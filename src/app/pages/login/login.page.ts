import { Component, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { trace } from '@angular/fire/performance';
import { Inject } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit,OnDestroy {

  private readonly userDisposable: Subscription|undefined;

  showLoginButton = false;
  showLogoutButton = false;

  constructor(public readonly auth: AngularFireAuth, @Inject(PLATFORM_ID) platformId: object, private router: Router) {

    if (!isPlatformServer(platformId)) {
      this.userDisposable = this.auth.authState.pipe(
        trace('auth'),
        map(u => !!u)
      ).subscribe(isLoggedIn => {
        this.showLoginButton = !isLoggedIn;
        this.showLogoutButton = isLoggedIn;
      });
    }
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    if (this.userDisposable) {
      this.userDisposable.unsubscribe();
    }
  }

  async login() {
    const user = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    // TODO sign into offline app
  }

  async loginAnonymously() {
    const user = await this.auth.signInAnonymously();
    // TODO sign into offline app
  }

  logout() {
    this.auth.signOut();
    // TODO sign out of offline app
  }

}
