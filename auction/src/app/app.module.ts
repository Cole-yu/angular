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
import {ProductService} from './share/product.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MultiplePipe } from './pipe/multiple.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { OutputComponent } from './contact-us/output/output.component';
import { OrderComponent } from './contact-us/order/order.component';
import { LifeComponent } from './company-news/life/life.component';


@NgModule({
  // 声明组件和管道
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
    RegistrationComponent,
    SignInComponent,
    FilterPipe,
    OutputComponent,
    OrderComponent,
    MultiplePipe,
    LifeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard,UnsavedGuard,ProductService],// 提供器：服务和模块
  bootstrap: [AppComponent]
})
export class AppModule { }
