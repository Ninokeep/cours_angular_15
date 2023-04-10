import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Tasks } from '../../../utils/tasks';

@Component({
  selector: 'app-dialog-task-open',
  templateUrl: './dialog-task-open.component.html',
  styleUrls: ['./dialog-task-open.component.scss']
})
export class DialogTaskOpenComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogTaskOpenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tasks,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
