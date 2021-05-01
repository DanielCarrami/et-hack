import { Component, OnInit} from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-form-failure',
  templateUrl: './form-failure.component.html',
  styleUrls: ['./form-failure.component.scss']
})
export class FormFailureComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FormFailureComponent>) { }

  ngOnInit(): void {
  }
  
  closeDialog() {
    this.dialogRef.close({ event: 'close' });
  }
}
