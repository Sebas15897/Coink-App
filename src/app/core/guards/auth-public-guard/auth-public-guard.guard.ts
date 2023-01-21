import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from '../../state/auth/auth.state';

@Injectable({
  providedIn: 'root',
})

export class AuthPublicGuard implements CanActivate {
  constructor(private router: Router, private store: Store) {}

  canActivate() {
    const noAuthenticated: boolean = this.store.selectSnapshot(
      AuthState.isAuthenticated
    );
    if (!noAuthenticated) {
      this.router.navigate(['private']);
    }
    return noAuthenticated;
  }
}
