import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ListeComponent } from './components/bodyoftodos/liste/liste.component';
import { DetailComponent } from './components/bodyoftodos/detail/detail.component';
import { BodyComponent } from './components/bodyoftodos/body/body.component';
import { ItemComponent } from './components/bodyoftodos/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ListeComponent,
    DetailComponent,
    BodyComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
