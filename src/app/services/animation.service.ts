import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AnimationService {
    private homeAnimationSubject = new Subject<void>();
    homeAnimation$ = this.homeAnimationSubject.asObservable();

    triggerHomeAnimation() {
        this.homeAnimationSubject.next();
    }
}
