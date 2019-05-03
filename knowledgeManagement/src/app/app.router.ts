import {RouterModule,Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UnitsComponent} from './units/units.component';

export const appRoutes:Routes=[
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"unit/:id",component:UnitsComponent},
  {path:"**",component:HomeComponent}
]
