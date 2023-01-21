import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IloginData } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(
    private httpClient: HttpClient,
  ) {}

  login(loginData: IloginData) {
    const url = '';
    return this.httpClient.post<any>(url, loginData);
  }

  logout() {}

}
