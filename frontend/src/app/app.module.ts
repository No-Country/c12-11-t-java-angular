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
//import { EffectsModule } from '@ngrx/effects'; <- instalar
import {appReducer} from "./store/reducers/app.reducer";

//import {menuReducer} from "./store/reducers/feature1.reducer";


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
    StoreModule.forRoot(appReducer),
    //EffectsModule.forFeature([Feature1Effects])
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
          //console.error(err);
          console.log("err =>", err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
