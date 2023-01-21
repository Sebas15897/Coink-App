import { IloginData } from '../../interfaces/auth.interface';
export class CoinkLoginAction {
  static readonly type = '[Auth] Login';
  constructor(public payload: IloginData) {}
}

export class CoinkLogoutAction {
  static readonly type = '[Auth] Logout';
  constructor() {}
}
