// 1. Añade las importaciones necesarias
import { Directive, ElementRef, Renderer2, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true // Asumiendo que es una directiva standalone
})
export class ScrollAnimateDirective implements AfterViewInit {

  // 2. Inyecta PLATFORM_ID en el constructor
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    // 3. Comprueba si estás en el navegador antes de ejecutar el código
    if (isPlatformBrowser(this.platformId)) {

      // --- Tu código original va aquí adentro, sin cambios ---
      const parent = this.el.nativeElement.parentElement;
      if (!parent) return; // Buena práctica: asegurar que el padre exista

      const children = Array.from(parent.querySelectorAll('[appScrollAnimate]'));
      const index = children.indexOf(this.el.nativeElement);
      const delay = index * 400; // 400ms entre cada tarjeta

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              this.renderer.addClass(this.el.nativeElement, 'visible');
            }, delay);
            observer.unobserve(this.el.nativeElement);
          }
        });
      }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      });

      observer.observe(this.el.nativeElement);
    }
  }
}
