import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { InterceptorsService } from './services/interceptors/interceptors.service';
import { HomeComponent } from './components/home/home.component';
import { AnimalesComponent } from './components/animales/animales.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Este es el módulo que me da acceso al HttpClient Service

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorsService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
