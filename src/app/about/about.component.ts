import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../services/animation.service';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  showContent = true;

  constructor(private animationService: AnimationService) { }

  ngOnInit() {
    // this.animationService.triggerHomeAnimation();
    this.animationService.homeAnimation$.subscribe(() => {
      this.triggerAnimation();
    });
  }

  triggerAnimation() {
    this.showContent = false;
    setTimeout(() => {
      this.showContent = true;
    }, 100);
  }

}
