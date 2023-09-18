import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticacionService {
  private isAuthenticated: boolean = false;

  login(email: string, password: string): boolean{


    if(email === 'usuario@example.com' && password === 'contraseña'){
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  isLoggedIN(): boolean{
    return this.isAuthenticated;
  }
  constructor() { }
}
