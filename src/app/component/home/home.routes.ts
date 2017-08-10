import {Route} from '@angular/router';
import {HomeComponent} from './home.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {WelcomescreenComponent} from './welcomescreen/welcomescreen.component'

export const HomeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'welcome',
        component: WelcomescreenComponent,
      },
      {
        path: 'wishlist',
        component: WishlistComponent,
      }
    ]
  }
];
