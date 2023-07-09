import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { faUser, faKey, faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SocialAuthService, FacebookLoginProvider } from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  private fb = inject( FormBuilder );
  private router = inject(Router);

  user:any;
  loggedIn:any;


  //private modalService = inject(NgbModal);
  public activeModal = inject(NgbActiveModal);

  private authService = inject(SocialAuthService);

  faUser = faUser;
  faKey = faKey;
  faLock = faLock;
  faFacebook = faFacebook;

  closeResult = '';

  ngOnInit(): void {
    // @ts-ignore
    google.accounts.id.initialize({
      client_id: "1062265390620-bsef1fpg54tvsc9fh04tq5hja74ta8ol.apps.googleusercontent.com",
      callback: this.handleCredentialResponse.bind(this),
      auto_select: false,
      cancel_on_tap_outside: true,

    });
    // @ts-ignore
    google.accounts.id.renderButton(
    // @ts-ignore
    document.getElementById("google-button"),
      { theme: "outline", size: "large", width: "100%" }
    );
    // @ts-ignore
    google.accounts.id.prompt((notification: PromptMomentNotification) => {
      console.log("notification =>", notification)
    });

  }

  async handleCredentialResponse(response: any) {
    // Here will be your response from Google.
    console.log("response =>", response);
  }

  public loginForm: FormGroup = this.fb.group({
    username:    ['', [ Validators.required ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
  });

  /*
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
  */

  login(){
    console.log("login =>", this.loginForm.value)
    this.activeModal.close(this.loginForm.value);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  /*
  loginWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  logOut(): void {
    this.authService.signOut();
  }
  */
}
