import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../services/animation.service';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  showContent = true;

  constructor(private animationService: AnimationService) { }

  ngOnInit() {
    this.animationService.homeAnimation$.subscribe(() => {
      this.replayAnimation();
    });
  }

  replayAnimation() {
    this.showContent = false;
    setTimeout(() => {
      this.showContent = true;
    }, 10);
  }
}
