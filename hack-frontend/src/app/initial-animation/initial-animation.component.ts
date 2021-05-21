import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-animation',
  templateUrl: './initial-animation.component.html',
  styleUrls: ['./initial-animation.component.scss']
})
export class InitialAnimationComponent implements OnInit {
  counter: number = 0;

  constructor(private router: Router,) {}

   scroll = (event: any): void => {
    // Here scroll is a variable holding the anonymous function 
    // this allows scroll to be assigned to the event during onInit
    // and removed onDestroy
    // To see what changed:
    this.counter++;
    if(this.counter == 3){
      this.router.navigate(['/enterthehacker'])
    }
  };

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

}
