// scroll-animate.directive.ts
import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit
} from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]'
})
export class ScrollAnimateDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const parent = this.el.nativeElement.parentElement;
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
