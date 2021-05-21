import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-hack',
  templateUrl: './about-hack.component.html',
  styleUrls: ['./about-hack.component.scss']
})
export class AboutHackComponent implements OnInit {
  backheight: any = '100vh';
  margintop: any = '0';
  open: boolean = false;
  showbutton: any = '';

  constructor() { }

  ngOnInit(): void {
  }

  panelOpenState: boolean = false;

  togglePanel() {
    console.log('Hola');
    this.panelOpenState = !this.panelOpenState
  }

  onExpansion(){
    if(this.open){
      this.open = false;
      this.backheight = '100vh';
      this.margintop = '0';
      this.showbutton = '';
    }else{
      this.open = true;
      this.backheight = '150vh';
      this.margintop = '-600';
      this.showbutton = 'hidden';
    }
  }

  setMyStyle(margin: any){
    let styles = {
      'margin-top': margin + 'px',
    };
    return styles;
  }

}
