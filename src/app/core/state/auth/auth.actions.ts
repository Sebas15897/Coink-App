import { IloginData } from '../../interfaces/auth.interface';
export class CoinkLoginAction {
  static readonly type = '[Auth] Login';
  constructor() {}
}

export class CoinkLogoutAction {
  static readonly type = 'CoinkLogoutAction';
  constructor() {}
}
