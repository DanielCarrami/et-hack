import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { fadeOutAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeOutAnimation]
})
export class AppComponent {
  title = 'hack-frontend';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}