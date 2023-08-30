import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-liloystitch',
  templateUrl: './liloystitch.component.html',
  styleUrls: ['./liloystitch.component.scss']
})
export class LiloystitchComponent {
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
