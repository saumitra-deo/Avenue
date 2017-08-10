import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {AuthComponent,SigninComponent}  from './index';

const AuthRoutes: Route[] = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {path: '', redirectTo: 'signin', pathMatch: 'full'},
      {
        path: 'signin',
        component: SigninComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(AuthRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class AuthRoutingModule {}
