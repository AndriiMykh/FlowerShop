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
import { FormsModule } from '@angular/forms';

const routes:Routes=[
  {path: 'flowers/:name', component:WelcomeComponent},
  {path: 'flowers', component:WelcomeComponent},
  {path: '', redirectTo:'/flowers',pathMatch:'full'},
  {path: '**', redirectTo:'/flowers',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [FlowerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
