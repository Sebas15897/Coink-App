import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  hide: boolean = true;
  formLogin: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formLogin = this.createForm();
  }

  ngOnInit() {
  }

  createForm(): FormGroup {
    return this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      remindme: [false]
    })
  }

  get invalidForm(): boolean {
    return this.formLogin.invalid;
  }

}
