import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './home/home.component';


export const routes: Route [] = [
  {
    path: '', component: NavComponent, children: [
      {path: '', component: HomeComponent},
      {path: ':id', component: HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
