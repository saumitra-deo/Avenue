import {NgModule} from '@angular/core';
import {AuthRoutingModule} from './auth.routes';
import { ReactiveFormsModule } from '@angular/forms'


import {AuthComponent} from './auth.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AuthComponent, SigninComponent]
})

export class AuthModule {
}
