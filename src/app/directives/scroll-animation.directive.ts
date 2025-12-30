import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appScrollAnimation]',
    standalone: true
})
export class ScrollAnimationDirective implements OnInit {
    @Input() appScrollAnimation: string = ''; // The animation class to add (e.g., 'animate-fade-up')
    @Input() delay: string = ''; // Optional delay class

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        // Initially hide the element
        this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add animation class
                    if (this.appScrollAnimation) {
                        this.renderer.addClass(this.el.nativeElement, this.appScrollAnimation);
                    }
                    // Add delay class if present
                    if (this.delay) {
                        this.renderer.addClass(this.el.nativeElement, this.delay);
                    }
                    // Remove opacity override to let animation control it
                    this.renderer.removeStyle(this.el.nativeElement, 'opacity');
                } else {
                    // Reset animation state when out of view
                    if (this.appScrollAnimation) {
                        this.renderer.removeClass(this.el.nativeElement, this.appScrollAnimation);
                    }
                    if (this.delay) {
                        this.renderer.removeClass(this.el.nativeElement, this.delay);
                    }
                    // Hide element again
                    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% visible
        });

        observer.observe(this.el.nativeElement);
    }
}
