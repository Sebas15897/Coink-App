import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { tap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { CoinkLoginAction, CoinkLogoutAction } from './auth.actions';

export interface AuthStateModel {
  token: string | null;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
  },
})

@Injectable()
export class AuthState {

  @Selector() static isAuthenticated(state: AuthStateModel): boolean {
    return state?.token ? false : true;
  }

  constructor(
    private authService: AuthService,
    private store: Store,
  ) {}

  @Action(CoinkLoginAction)
  CoinkLoginAction(ctx: StateContext<AuthStateModel>, { payload }: CoinkLoginAction) {
    return this.authService.login(payload).pipe(
      tap(
        (result) => {

        }
      )
    );
  }

  @Action(CoinkLogoutAction)
  CoinkLogoutAction(ctx: StateContext<AuthStateModel>) {

  }

}
