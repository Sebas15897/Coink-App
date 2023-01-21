import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SweetAlertHelper } from 'src/app/core/helpers/sweet-alert.helper';
import { CoinkLoginAction } from 'src/app/core/state/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
    private sweetAlertHelper: SweetAlertHelper,
  ) {
    this.formLogin = this.createForm();
  }

  ngOnInit() {}

  createForm(): FormGroup {
    return this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      remindme: [false],
    });
  }

  login() {
    this.store.dispatch(new CoinkLoginAction()).subscribe(() => {
      this.router.navigateByUrl('/admin');
    });
  }

  get invalidForm(): boolean {
    return this.formLogin.invalid;
  }
}
