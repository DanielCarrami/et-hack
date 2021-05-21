import { Component,  ElementRef, ViewChild, OnInit, HostListener} from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { fadeOutAnimation} from '../animations';


@Component({
  selector: 'app-initial-transition',
  templateUrl: './initial-transition.component.html',
  styleUrls: ['./initial-transition.component.scss'],
  animations: [fadeOutAnimation]
})
export class InitialTransitionComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/animation/tunel.json',
    loop: false,
  };
  isShown: boolean = true;

  animationCreated(animationItem: AnimationItem): void {
    setTimeout(()=> {
      this.isShown=false;
      this.router.navigate(['/home'])
    }, 2500)
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  updateAnimation(): void {
    this.options = {
      ...this.options,
      path: '/assets/animation/tunel.json',
      
    };
  }

}
