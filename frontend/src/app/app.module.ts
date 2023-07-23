import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from '@abacritt/angularx-social-login';

/*NgRx*/
import {StoreModule} from '@ngrx/store';
import {appReducer} from "./store/reducers/app.reducer";
import {cartReducer} from "./store/reducers/cart.reducer";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { pedidoReducer } from './store/reducers/pedido.reducer';

import { NgxStripeModule } from 'ngx-stripe';
import { cardReducer } from './store/reducers/card.reducer';

import { InteceptorInterceptor } from '@shared/interceptors/inteceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    SocialLoginModule,
    HttpClientModule,
    StoreModule.forRoot({app: appReducer, cart: cartReducer,pedido:pedidoReducer,card:cardReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // Restrict extension to log-only mode


    }),
    EffectsModule.forRoot([]),

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
          },

        ],
        onError: (err) => {
          console.log("err =>", err);
        }
      } as SocialAuthServiceConfig,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InteceptorInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
