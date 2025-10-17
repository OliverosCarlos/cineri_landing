import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private title: Title, private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: object
  ) { }

  updateMetaTags(title: string, description: string, imageUrl: string) {
    // 1. Establece el título de la página
    this.title.setTitle(title);

    // 2. Actualiza los meta tags usando `updateTag` para evitar duplicados
    this.meta.updateTag({ name: 'description', content: description });

    // Open Graph Tags (para Facebook, LinkedIn, etc.)
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
    if (isPlatformBrowser(this.platformId)) {
      this.meta.updateTag({ property: 'og:url', content: window.location.href }); // URL de la página actual
    }
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Cards
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
  }
}
