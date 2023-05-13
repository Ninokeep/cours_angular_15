import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/utils/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.group<Login>({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  onSubmit() {
    console.log('login');
  }
}
