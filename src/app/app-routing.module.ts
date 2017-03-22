import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
/**
 * Created by shetu on 3/22/17.
 */
const appRoutes:Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cricketer'
  },
  {
    path: 'cricketer',
    loadChildren: 'app/cricketer/cricketer.module#CricketerModule'
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes),
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule {}
