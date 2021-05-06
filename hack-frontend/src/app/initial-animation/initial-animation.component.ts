import { Component,  ElementRef, ViewChild, OnInit, HostListener} from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-initial-animation',
  templateUrl: './initial-animation.component.html',
  styleUrls: ['./initial-animation.component.scss']
})
export class InitialAnimationComponent implements OnInit {
  counter: number = 0;
  options: AnimationOptions = {
    path: '',
    loop: false,
  };
  isShown: boolean = false;
  
  @HostListener("scroll", ['$event'])
  doSomethingOnScroll($event:Event){
    console.log("scroll: " + $event);
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log('Holaaa' + animationItem);
    setTimeout(()=> this.isShown=false, 5000)
  }

  constructor() {}

   scroll = (event: any): void => {
    // Here scroll is a variable holding the anonymous function 
    // this allows scroll to be assigned to the event during onInit
    // and removed onDestroy
    // To see what changed:
    this.counter++;
    if(this.counter == 15){
      this.isShown = true;
      this.updateAnimation();
    }
    const number = event.srcElement.scrollTop;
    console.log(event);
    console.log(event.srcElement);
    console.log('I am scrolling ' + this.counter);
  };

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  updateAnimation(): void {
    this.options = {
      ...this.options,
      path: '/assets/animation/tunel.json',
      
    };
    this.gotoAnimation()
  }

  gotoAnimation() {
    window.scroll(0, 1000);
  }
}
