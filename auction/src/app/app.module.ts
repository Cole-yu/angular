import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { StarsComponent } from './stars/stars.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { UnitComponent} from './unit/unit.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ChatComponent } from './chat/chat.component';
import {UnsavedGuard} from './guard/unsaved.guard';
import {AuthGuard} from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { WebMapComponent } from './web-map/web-map.component';
import { CompanyNEWSComponent } from './company-news/company-news.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    StarsComponent,
    CarouselComponent,
    ProductComponent,
    HomeComponent,
    UnitComponent,
    ProductDescComponent,
    SellerInfoComponent,
    ChatComponent,
    LoginComponent,
    FirstpageComponent,
    AboutUSComponent,
    ContactUSComponent,
    WebMapComponent,
    CompanyNEWSComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard,UnsavedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
