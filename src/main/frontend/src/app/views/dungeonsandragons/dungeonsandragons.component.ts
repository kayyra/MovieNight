import { Component,ElementRef,Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dungeonsandragons',
  templateUrl: './dungeonsandragons.component.html',
  styleUrls: ['./dungeonsandragons.component.scss']
})
export class DungeonsandragonsComponent {
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
