import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormloginComponent } from './Inscriptions/formlogin/formlogin.component';
import { FormregisterComponent } from './Inscriptions/formregister/formregister.component';

@NgModule({
  declarations: [
    AppComponent,
    FormloginComponent,
    FormregisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
