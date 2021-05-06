
// import the required animation functions from the angular animations module
import { trigger, animate, transition, style } from '@angular/animations';

export const fadeOutAnimation =
    trigger('routeAnimations', [
        transition('TransitionPage <=> HomePage', [
            // css styles at start of transition
            style({ 
                opacity: 0
            }),
            // animation and styles at end of transition
            animate('1s', style({ opacity: 0.5}))
        ])
]);