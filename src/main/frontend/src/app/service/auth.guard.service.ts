import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { AuthenticacionService } from './authenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthenticacionService,
    private router: Router
  ) { }

  canActivate(): boolean{
    if( this.authService.isLoggedIN()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
