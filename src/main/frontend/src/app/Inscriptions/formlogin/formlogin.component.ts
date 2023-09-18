import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticacionService } from 'src/app/service/authenticacion.service';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.scss'],
  
})
export class FormloginComponent {
email: string = '';
password: string = '';
errorMessage: string = '';

constructor(
  private authService: AuthenticacionService,
  private router: Router
) { }

onSubmit(): void {
  const isLogged = this.authService.login(this.email, this.password);
  if(isLogged){
    this.router.navigate(['/dashboard']);
  }else{
    this.errorMessage = 'Wrong credentials, please try again';
  }
}

ngOnInit(): void {}

}
