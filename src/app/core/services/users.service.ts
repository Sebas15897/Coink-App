import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { ILoginResponse } from '../interfaces/response.interface';
import { IUsers } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root',
})

export class UsersService {
  constructor(
    private httpClient: HttpClient,
    private appSettins: AppSettings,
  ) {}

  getUsers(page: number) {
    const url = `${this.appSettins.users.urls.getUsers}${page}`;
    return this.httpClient.get<IUsers>(url);
  }
}
