import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UnitComponent} from './unit/unit.component';
import {ProductDescComponent} from './product-desc/product-desc.component';
import {SellerInfoComponent} from './seller-info/seller-info.component';
import {ChatComponent} from './chat/chat.component';
import {AuthGuard} from './guard/auth.guard';
import {UnsavedGuard} from './guard/unsaved.guard';
import {LoginComponent} from './login/login.component';
import {FirstpageComponent} from './firstpage/firstpage.component';
import {AboutUSComponent} from './about-us/about-us.component';
import {ContactUSComponent} from './contact-us/contact-us.component';
import {CompanyNEWSComponent} from './company-news/company-news.component';
import {WebMapComponent} from './web-map/web-map.component';
import {RegistrationComponent} from './registration/registration.component';
import {SignInComponent} from './sign-in/sign-in.component';

const  routes: Routes = [
    { path:'',redirectTo:'login',pathMatch:'full'},
    { path: 'login' , component:LoginComponent,children:[
        { path:'',component:SignInComponent},
        { path: 'regist' , component:RegistrationComponent},
      ]},
    { path:'user',component:FirstpageComponent,children:[
        { path: '' , component:HomeComponent},
        { path: 'home', component:HomeComponent},
        { path:'unit/:id',component:UnitComponent,children:[
            {path:'',component:ProductDescComponent},
            {path:'seller/:name',component:SellerInfoComponent},
            {path:'chat',component:ChatComponent,outlet:'aux'},
          ]
        },
        { path:'aboutUS',component:AboutUSComponent,canDeactivate:[UnsavedGuard],},
        { path:'contactUS',component:ContactUSComponent},
        { path:'webMAP',component:WebMapComponent},
        { path:'news',component:CompanyNEWSComponent},
    ],},// todo:登录验证项目完成后再加canActivate:[AuthGuard],
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
