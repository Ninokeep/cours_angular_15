import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.scss']
})
export class TasksFormComponent {

  id = 2121;
  constructor(private TasksService: TasksService) {

  }

  formGroup = new FormGroup({
    author: new FormControl<string | null>(''),
    description: new FormControl<string | null>('')
  });


  onSubmit() {
    this.TasksService.addTasks({
      id: this.id++,
      author: this.formGroup.controls.author.value as string,
      description: this.formGroup.controls.description.value as string,
      validated: false
    }).subscribe(response => {
      console.log(response);
    })
  }
}
