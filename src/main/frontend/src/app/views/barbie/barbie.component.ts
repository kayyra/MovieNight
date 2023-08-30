import { Component, ElementRef,Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-barbie',
  templateUrl: './barbie.component.html',
  styleUrls: ['./barbie.component.scss']
})
export class BarbieComponent {
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
