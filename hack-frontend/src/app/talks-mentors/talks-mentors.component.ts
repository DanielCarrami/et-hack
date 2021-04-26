import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TalksDetailsComponent } from '../modals/talks-details/talks-details.component';

@Component({
  selector: 'app-talks-mentors',
  templateUrl: './talks-mentors.component.html',
  styleUrls: ['./talks-mentors.component.scss']
})
export class TalksMentorsComponent {

  dialogValue!: string;
  sendValue!: string;


  constructor(public dialog: MatDialog) { }

  onClick(buttonId: number){
    switch(buttonId){
      case 1:
        this.sendValue = 'one';
        break;
      case 2:
        this.sendValue = 'two';
        break;
      case 3:
        this.sendValue = 'three';
        break;
      case 4:
        this.sendValue = 'four';
        break;
      case 5:
        this.sendValue = 'five';
        break;
      case 6:
        this.sendValue = 'six';
        break;
      default:
        this.sendValue = 'one';
    }
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TalksDetailsComponent, {
      width: '1200px',
      //backdropClass: 'custom-dialog-backdrop-class',
      //panelClass: 'custom-dialog-panel-class',
      data: {
        pageValue: this.sendValue
      
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.dialogValue = result.data;
    });
  }


}
