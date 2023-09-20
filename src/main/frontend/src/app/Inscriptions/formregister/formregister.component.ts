import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formregister',
  templateUrl: './formregister.component.html',
  styleUrls: ['./formregister.component.scss']
})
export class FormregisterComponent {
registrationForm!: FormGroup;
showValidationMessage: boolean = false;

constructor(private fb: FormBuilder, private http: HttpClient, private route: Router){
  this.registrationForm = this.fb.group({    
    username: ['', [Validators.required, Validators.pattern('[A-Za-z]*')]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]]      
  });
}

  onSubmit(): void {   
    
    if (this.registrationForm.valid) {
      const registrationData = this.registrationForm.value;

      this.http.post('/api/register', registrationData).subscribe(
        (response: any) => {
          console.log('Registro realizado con éxito!:', response);          
          this.route.navigate(['/dashboard']);
        },
        (error: any) => {
          console.error('Error durante el registro:', error);
        }
      );
    }
  
  }
}




