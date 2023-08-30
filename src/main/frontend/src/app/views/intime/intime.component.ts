import { Component, ElementRef,Input,Output,ViewChild } from '@angular/core';

@Component({
  selector: 'app-intime',
  templateUrl: './intime.component.html',
  styleUrls: ['./intime.component.scss']
})
export class IntimeComponent {
  @ViewChild('audioPlayer', { static: true }) audioPlayer!: ElementRef; 
isMuted: boolean =false;

constructor() {}

toggleSound(){
  const audioPlayer = this.audioPlayer.nativeElement;
  if(this.isMuted){
    audioPlayer.play();
  }else{
    audioPlayer.pause();
  }
  this.isMuted = !this.isMuted;
}
   
}
