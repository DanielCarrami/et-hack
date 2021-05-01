import { Component, OnInit} from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-form-success',
  templateUrl: './form-success.component.html',
  styleUrls: ['./form-success.component.scss']
})
export class FormSuccessComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FormSuccessComponent>) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close' });
  }
}
