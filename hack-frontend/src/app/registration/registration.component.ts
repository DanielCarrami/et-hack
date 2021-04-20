import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  step: any = 1;

  constructor() { }

  ngOnInit(): void {
  }

  continue(change: any): void{
    this.step = change;
  }

}
