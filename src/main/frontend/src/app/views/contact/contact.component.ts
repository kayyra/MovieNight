import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData ={
    name: '',
    director: '',
    date: '',
    description: ''
  };

  constructor(private httpClient: HttpClient) {}

  onSubmit(){
    this.httpClient.post('/films/submit', this.formData).subscribe(
      (Response: any) =>{
        console.log('Response from server: ', Response);
      },
      (error: any) =>{
        console.log('Error:', error);
      }
    );
  }
}
