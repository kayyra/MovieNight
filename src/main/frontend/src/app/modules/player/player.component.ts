import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-player',
  template: `
  <audio id="audio-player" autoplay loop volume="0.5">
    <source src="https://audio.jukehost.co.uk/hKVPql4FA5UW4FxhJ3UiQbSqVk3HLbOF" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>

  <a (click)="toggleMute()">
    <img class="muted" src="/assets/images/unmuted.png" *ngIf="!isMuted">
    <img class="unmuted" src="/assets/images/muted.png" *ngIf="isMuted">
  </a>
`,
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  audioPlayer!: HTMLAudioElement;
  isMuted = false;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.audioPlayer = this.elementRef.nativeElement.querySelector('#audio-player');
    document.addEventListener('click', () => {
      this.audioPlayer.play();
    });
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    this.audioPlayer.muted = this.isMuted;
  }
}
