import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-talks-details',
  templateUrl: './talks-details.component.html',
  styleUrls: ['./talks-details.component.scss']
})
export class TalksDetailsComponent implements OnInit {

  fromPage: string;
  //fromDialog: string;

  constructor(public dialogRef: MatDialogRef<TalksDetailsComponent>,
    private router: Router,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.fromPage = data.pageValue;
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close' });
    
  }

  register(){
    this.dialogRef.close({ event: 'close' });
    this.router.navigate(['/registration'])
  }
}
