import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {routes} from '../../routes';

import {AuthService} from '../../services/auth.service'
import {BookService} from '../../services/book.service'

import {AuthModule} from '../auth/auth.module';
import {HomeModule} from '../home/home.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService,BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
