import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { faUser, faKey, faLock } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {
  private fb = inject( FormBuilder );
  private router = inject(Router);
  private modalService = inject(NgbModal);

  faUser = faUser;
  faKey = faKey;
  faLock = faLock;

  closeResult = '';

  public loginForm: FormGroup = this.fb.group({
    username:    ['', [ Validators.required ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
  });

  /*
  login(){

    if(this.loginForm.valid) {
      console.log("login =>", this.loginForm.value)
      this.router.navigateByUrl('/container');
    }

  }
  */

  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
        console.log("login =>", this.loginForm.value)
        console.log("result =>", result)
				//this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${reason}`
        console.log("reason =>", reason);
			},
		);
	}
}
