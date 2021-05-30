import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core'; 

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private myElement: ElementRef) { }

  ngOnInit(): void {
  }

  gotoTop() {
    document.getElementById('cont')?.scrollIntoView({behavior: 'smooth'});
  }   

}
