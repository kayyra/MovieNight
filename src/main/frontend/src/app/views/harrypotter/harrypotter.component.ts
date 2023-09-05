import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-harrypotter',
  templateUrl: './harrypotter.component.html',
  styleUrls: ['./harrypotter.component.scss']
})
export class HarrypotterComponent {
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
