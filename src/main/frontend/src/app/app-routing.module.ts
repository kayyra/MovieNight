import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormloginComponent } from './Inscriptions/formlogin/formlogin.component';
import { FormregisterComponent } from './Inscriptions/formregister/formregister.component';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  // {path: 'dashboard', component:DashboardComponent},
  {path: 'login', component:FormloginComponent},
  {path: 'register', component:FormregisterComponent},
  // {path: 'play', component:PlayComponent},
  // {path: 'favorites', component:FavoritesComponent},
  // {path: 'contact', component:ContactComponent},
  // {path: 'liloystitch', component:LiloystitchComponent},
  // {path: 'barbie', component:BarbieComponent},
  // {path: 'intime', component: IntimeComponent},
  // {path: 'freeguy', component:FreeguyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
