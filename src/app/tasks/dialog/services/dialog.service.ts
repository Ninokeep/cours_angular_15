import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogTaskOpenComponent } from '../dialog-task-open/dialog-task-open.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialogRef: MatDialogRef<DialogTaskOpenComponent>) { }


  closeDialog() {
    console.log(this.dialogRef);

    this.dialogRef.close();
  }
}
