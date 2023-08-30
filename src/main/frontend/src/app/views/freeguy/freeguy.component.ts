import { Component,ElementRef,Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-freeguy',
  templateUrl: './freeguy.component.html',
  styleUrls: ['./freeguy.component.scss']
})
export class FreeguyComponent {
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
