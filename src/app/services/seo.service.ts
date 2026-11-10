import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly baseUrl = 'https://cineri.vaweei.com';

  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
  ) { }

  updateMetaTags(title: string, description: string, imageUrl: string) {
    const pageUrl = this.buildAbsoluteUrl(this.router.url || '/');
    const absoluteImageUrl = this.toAbsoluteUrl(imageUrl);

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: absoluteImageUrl });
    this.meta.updateTag({ property: 'og:url', content: pageUrl });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'CINERI Tepic' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: absoluteImageUrl });
    this.meta.updateTag({ name: 'twitter:url', content: pageUrl });

    this.updateCanonical(pageUrl);
    this.title.setTitle(title);
  }

  private buildAbsoluteUrl(path: string): string {
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }

    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    if (cleanPath === '/') {
      return this.baseUrl;
    }
    return `${this.baseUrl}${cleanPath}`;
  }

  private toAbsoluteUrl(url: string): string {
    return url.startsWith('http://') || url.startsWith('https://')
      ? url
      : this.buildAbsoluteUrl(url);
  }

  private updateCanonical(url: string): void {
    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }
}
