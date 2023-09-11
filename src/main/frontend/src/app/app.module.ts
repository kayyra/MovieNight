import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormloginComponent } from './Inscriptions/formlogin/formlogin.component';
import { FormregisterComponent } from './Inscriptions/formregister/formregister.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavComponent } from './shared/nav/nav.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ContactComponent } from './views/contact/contact.component';
import { LiloystitchComponent } from './views/liloystitch/liloystitch.component';
import { PlayComponent } from './views/play/play.component';
import { IntimeComponent } from './views/intime/intime.component';
import { DungeonsandragonsComponent } from './views/dungeonsandragons/dungeonsandragons.component';
import { CardComponent } from './views/card/card.component';
import { BarbieComponent } from './views/barbie/barbie.component';
import { FreeguyComponent } from './views/freeguy/freeguy.component';

import { SocialmediaComponent } from './shared/socialmedia/socialmedia.component';
import { FavoriteComponent } from './views/favorite/favorite.component';
import { HarrypotterComponent } from './views/harrypotter/harrypotter.component';
import { FavoriteService } from './service/favorite.service';

@NgModule({
  declarations: [
    AppComponent,
    FormloginComponent,
    FormregisterComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    DashboardComponent,
    ContactComponent,
    LiloystitchComponent,
    PlayComponent,
    IntimeComponent,
    DungeonsandragonsComponent,
    CardComponent,
    BarbieComponent,
    FreeguyComponent,
    SocialmediaComponent,
    FavoriteComponent,
    HarrypotterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
