import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class Blog implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags(
      'Blog de Neuropsicología y Salud Mental | CINERI Tepic',
      'Artículos y recursos sobre neuropsicología, psicoterapia y estimulación temprana en Tepic Nayarit.',
      'https://cineri.vaweei.com/assets/share-about.png',
    );
  }
}
