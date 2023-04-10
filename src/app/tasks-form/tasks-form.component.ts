import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TasksService } from '../services/tasks.service';
import { DialogService } from '../tasks/dialog/services/dialog.service';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogTaskOpenComponent } from '../tasks/dialog/dialog-task-open/dialog-task-open.component';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.scss']
})
export class TasksFormComponent {



  constructor(
    private taskService: TasksService,
    private dialogRef: MatDialogRef<DialogTaskOpenComponent>
  ) {

  }

  formGroup = new FormGroup({
    author: new FormControl<string | null>(''),
    description: new FormControl<string | null>('')
  });


  onSubmit() {

    this.taskService.addTasks({
      author: this.formGroup.controls.author.value as string,
      description: this.formGroup.controls.description.value as string,
      validated: false
    })
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
