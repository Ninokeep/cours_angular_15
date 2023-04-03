import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  @Input() author: string = '';
  @Input() description: string = '';
  @Input() validated: boolean = false;

  isChecked: boolean = false;


  onChange(event: Event) {

    console.log(event);

  }

}
