import { Directive, ElementRef, OnInit, inject, input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appScrollAnimation]',
    standalone: true
})
export class ScrollAnimationDirective implements OnInit {
    // Modern Signal Inputs
    appScrollAnimation = input<string>('animate-fade-up');
    delay = input<string>('');

    private el = inject(ElementRef);
    private renderer = inject(Renderer2);

    ngOnInit() {
        // Hide initially using Renderer2 to avoid direct DOM manipulation timing issues
        this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
        // We removed visibility: hidden to allow layout to calculate correctly, 
        // but if it causes clicks on invisible items, we can add it back.
        // For now, opacity 0 is enough for visual.

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const animationClass = this.appScrollAnimation();
                const delayClass = this.delay();

                if (entry.isIntersecting) {

                    if (animationClass) {
                        this.renderer.addClass(this.el.nativeElement, animationClass);
                    }
                    if (delayClass) {
                        this.renderer.addClass(this.el.nativeElement, delayClass);
                    }

                    // Force opacity removal to allow animation to take over
                    this.renderer.removeStyle(this.el.nativeElement, 'opacity');

                } else {
                    // Reset
                    if (animationClass) {
                        this.renderer.removeClass(this.el.nativeElement, animationClass);
                    }
                    if (delayClass) {
                        this.renderer.removeClass(this.el.nativeElement, delayClass);
                    }

                    // Hide again
                    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
                }
            });
        }, {
            threshold: 0.1, // Trigger as soon as 10% is visible
            rootMargin: '0px'
        });

        observer.observe(this.el.nativeElement);
    }
}
