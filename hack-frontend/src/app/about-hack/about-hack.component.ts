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
  public screenWidth: any;
  public screenHeight: any;

  constructor() { }

  ngOnInit(): void {
  }

  panelOpenState: boolean = false;

  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
    this.backheight = '100vh';
    this.margintop = '0';
    this.showbutton = '';
    this.open = false;
  }

  onExpansion(){
    this.screenWidth = window.innerWidth;

    this.screenHeight = window.innerHeight;
    console.log(this.screenHeight);
    console.log(this.screenWidth);
    console.log('Hello');
    if(this.open){
      console.log('Open');
      this.open = false;
      this.backheight = '100vh';
      this.margintop = '0';
      this.showbutton = '';
    }else{
      console.log('Close');
      if(this.screenWidth < 700){
        this.backheight = '250vh';
        this.margintop = '-1200';
      }else{
        this.backheight = '150vh';
        this.margintop = '-500';
      }
      if(this.screenHeight < 700 && this.screenWidth > 700){
        this.backheight = '180vh';
        this.margintop = '-450';
      }
      this.open = true;
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
