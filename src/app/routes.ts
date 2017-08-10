import {Routes} from '@angular/router';
import {SigninComponent} from './component/auth/signin/signin.component'
import {HomeRoutes} from './component/home/home.routes';

export const routes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  ...HomeRoutes
  //
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];
