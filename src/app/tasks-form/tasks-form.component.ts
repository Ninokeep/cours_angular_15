import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TasksService } from '../services/tasks.service';
import { DialogService } from '../tasks/dialog/services/dialog.service';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogTaskOpenComponent } from '../tasks/dialog/dialog-task-open/dialog-task-open.component';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.scss'],
})
export class TasksFormComponent implements OnDestroy {
  constructor(
    private taskService: TasksService,
    private dialogRef: MatDialogRef<DialogTaskOpenComponent>
  ) {}

  ngOnDestroy(): void {
    this.taskService.unSubscribe();
  }

  formGroup = new FormGroup({
    author: new FormControl<string | null>('', [Validators.required]),
    description: new FormControl<string | null>('', [Validators.required]),
  });

  onSubmit() {
    if (this.formGroup.valid) {
      this.taskService.addTasks({
        author: this.formGroup.controls.author.value as string,
        description: this.formGroup.controls.description.value as string,
        validated: false,
      });

      this.dialogRef.close();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
