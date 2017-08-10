import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WelcomescreenComponent } from './welcomescreen/welcomescreen.component'
import {RouterModule} from '@angular/router';
import {HomeRoutes as routes} from './home.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, WishlistComponent, WelcomescreenComponent]
})

export class HomeModule {
}
