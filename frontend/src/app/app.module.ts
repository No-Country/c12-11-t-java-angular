import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from '@abacritt/angularx-social-login';

/*NgRx*/
import {StoreModule} from '@ngrx/store';
import {appReducer} from "./store/reducers/app.reducer";
import {cartReducer} from "./store/reducers/cart.reducer";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    SocialLoginModule,
    HttpClientModule,
    StoreModule.forRoot({app: appReducer, cart: cartReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
       // Restrict extension to log-only mode


    }),
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('2222756371259035')
          }
        ],
        onError: (err) => {
          console.log("err =>", err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
