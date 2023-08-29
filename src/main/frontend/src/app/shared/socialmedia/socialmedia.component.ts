import { Component } from '@angular/core';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.scss']
})
export class SocialmediaComponent {
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
