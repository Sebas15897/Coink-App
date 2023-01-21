import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { tap } from 'rxjs';
import { SweetAlertHelper } from '../../helpers/sweet-alert.helper';
import { AuthService } from '../../services/auth.service';
import {
  CoinkHideLoadingAction,
  CoinkShowLoadingAction,
} from '../loading/loading.actions';
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
    private sweetAlertHelper: SweetAlertHelper
  ) {}

  @Action(CoinkLoginAction)
  CoinkLoginAction(ctx: StateContext<AuthStateModel>) {
    ctx.dispatch(new CoinkShowLoadingAction());
    return this.authService.login().pipe(
      tap(
        (result) => {
          ctx.patchState({
            token: result.name,
          });
          setTimeout(() => {
            ctx.dispatch(new CoinkHideLoadingAction()).subscribe(() => {
              this.sweetAlertHelper.createCustomAlert({
                title: 'Bienvenido',
                text: 'Ha iniciado sesión con exito.',
                icon: 'success',
              });
            });
          }, 2000);
        },
        (error) => {
          ctx.dispatch(new CoinkHideLoadingAction());
        }
      )
    );
  }

  @Action(CoinkLogoutAction)
  CoinkLogoutAction(ctx: StateContext<AuthStateModel>) {}
}
