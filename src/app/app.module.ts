import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {BookService} from './shared/services/book.service';
import {HttpClientModule} from '@angular/common/http';
import {SignupComponent} from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './shared/services/user.service';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SignupComponent,
    DetailsComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BookService, UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
