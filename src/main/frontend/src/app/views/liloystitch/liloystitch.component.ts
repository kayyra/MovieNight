import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-liloystitch',
  templateUrl: './liloystitch.component.html',
  styleUrls: ['./liloystitch.component.scss']
})
export class LiloystitchComponent {
  @ViewChild('audioPlayer', { static: true }) audioPlayer!: ElementRef;
  isMusicPlaying: boolean = true;
  isFavorite: boolean = false;

  constructor() {}


  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  shareOnSocialMedia(platform: string) {
    const urlToShare = 'https://movienight.com';

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}` , '_blank');
        break;
        case 'twitter':
        window.open(`https://www.twitter.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}` , '_blank');
        break;
        case 'instagram':
          window.open(`https://www.instagram.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}` , '_blank');
    }
  }
}
