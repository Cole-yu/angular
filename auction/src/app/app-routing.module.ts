import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {UnitComponent} from './unit/unit.component';
import {ProductDescComponent} from './product-desc/product-desc.component';
import {SellerInfoComponent} from './seller-info/seller-info.component';
import {ChatComponent} from './chat/chat.component';
import {AuthGuard} from './guard/auth.guard';
import {UnsavedGuard} from './guard/unsaved.guard';
import  {LoginComponent} from './login/login.component';
import {FirstpageComponent} from './firstpage/firstpage.component';

const  routes: Routes = [
    { path:'',redirectTo:'login',pathMatch:'full'},
    { path: 'login' , component:LoginComponent},
    { path:"user",component:FirstpageComponent,children:[
        { path: '' , component:HomeComponent},
        { path:'unit/:id',component:UnitComponent,children:[
            {path:'',component:ProductDescComponent},
            {path:'seller/:id',component:SellerInfoComponent},
            {path:'chat',component:ChatComponent,outlet:'aux'},
          ],canActivate:[AuthGuard],
          canDeactivate:[UnsavedGuard],
        }
    ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
