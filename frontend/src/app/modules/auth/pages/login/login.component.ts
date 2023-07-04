import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private fb = inject( FormBuilder );
  private router = inject(Router);

  faUser = faUser;
  faKey = faKey;

  public loginForm: FormGroup = this.fb.group({
    username:    ['', [ Validators.required ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
  });

  login(){

    if(this.loginForm.valid) {
      this.router.navigateByUrl('/container');
    }

  }
}
