import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {DetailsComponent} from './details/details.component';
import {CartComponent} from './cart/cart.component';


export const routes: Route [] = [
  {path: 'join', component: SignupComponent},
  {
    path: '', component: NavComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'category/:id', component: HomeComponent},
      {path: 'details/:id', component: DetailsComponent},
      {path: 'cart', component: CartComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
