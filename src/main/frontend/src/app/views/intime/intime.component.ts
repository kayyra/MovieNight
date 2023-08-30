import { Component, ElementRef,Input,Output,ViewChild } from '@angular/core';

@Component({
  selector: 'app-intime',
  templateUrl: './intime.component.html',
  styleUrls: ['./intime.component.scss']
})
export class IntimeComponent {
  

  reproducir() {
    const audio = new Audio('/assets/audio/Intime.mp3');
    audio.play();
  }
  
  
}
