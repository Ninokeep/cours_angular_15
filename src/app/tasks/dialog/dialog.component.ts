import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTaskOpenComponent } from './dialog-task-open/dialog-task-open.component';
import { Tasks } from '../../utils/tasks';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  author?: string;
  description?: string;
  validated?: boolean;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const diagLogRef = this.dialog.open(DialogTaskOpenComponent, {
      data: {
        author: this.author,
        description: this.description,
        validated: this.validated
      }
    });

    diagLogRef.afterClosed().subscribe((result: Tasks) => {
      this.author = result.author;
      this.description = result.description;
      this.validated = result.validated;
    })
  }

}
