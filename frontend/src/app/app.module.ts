import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {Routes,RouterModule} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlowerService } from './service/flower.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutFormComponent } from './components/check-out-form/check-out-form.component';

const routes:Routes=[
  {path: 'flowers/:name', component:WelcomeComponent},
  {path: 'flowers', component:WelcomeComponent},
  {path: 'shoppingCart', component:ShoppingCartComponent},
  {path:'checkOutForm', component:CheckOutFormComponent},
  {path: '', redirectTo:'/flowers',pathMatch:'full'},
  {path: '**', redirectTo:'/flowers',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    CheckOutFormComponent,

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FlowerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
