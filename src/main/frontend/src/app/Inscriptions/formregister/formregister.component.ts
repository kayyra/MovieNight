import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formregister',
  templateUrl: './formregister.component.html',
  styleUrls: ['./formregister.component.scss']
})
export class FormregisterComponent {
formData: FormGroup;
  http: any;

constructor(private fb: FormBuilder){
  this.formData = this.fb.group({    
    username: [Validators.required],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/)]]    
  });
}

onSubmit(): void {
  if(this.formData.valid){
    const registrationData = this.formData.value;

    this.http.post('/api/register', registrationData).subscribe(
      (response: any) =>{
        console.log('Register successfully:', Response );
      },
      (error: any) =>{
        console.error('Error during registration:', error);
      }
    );
  }
}
}
