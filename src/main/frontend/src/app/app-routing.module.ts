import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormloginComponent } from './Inscriptions/formlogin/formlogin.component';
import { FormregisterComponent } from './Inscriptions/formregister/formregister.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PlayComponent } from './views/play/play.component';

import { ContactComponent } from './views/contact/contact.component';
import { LiloystitchComponent } from './views/liloystitch/liloystitch.component';
import { BarbieComponent } from './views/barbie/barbie.component';
import { IntimeComponent } from './views/intime/intime.component';
import { FreeguyComponent } from './views/freeguy/freeguy.component';
import { DungeonsandragonsComponent } from './views/dungeonsandragons/dungeonsandragons.component';
import { FavoriteComponent } from './views/favorite/favorite.component';
import { HarrypotterComponent } from './views/harrypotter/harrypotter.component';
import { AuthGuardService } from './service/auth.guard.service';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuardService]},
  {path: 'login', component:FormloginComponent},
  {path: 'register', component:FormregisterComponent},
  {path: 'play', component:PlayComponent},  
  {path: 'favorite', component: FavoriteComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'liloystitch', component:LiloystitchComponent},
  {path: 'barbie', component:BarbieComponent},
  {path: 'intime', component: IntimeComponent},
  {path: 'freeguy', component:FreeguyComponent},
  {path: 'dungeonsanddragons', component:DungeonsandragonsComponent},
  {path: 'harrypotter', component: HarrypotterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
