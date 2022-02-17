import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { InterceptorsService } from './services/interceptors/interceptors.service';
@NgModule({
  declarations: [
    AppComponent
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
