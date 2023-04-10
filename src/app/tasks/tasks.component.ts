import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  @Input() id?: number;
  @Input() author: string = '';
  @Input() description: string = '';
  @Input() validated: boolean = false;
  @Output() deleted = new EventEmitter<number>();

  isChecked: boolean = false;

  onChange(event: Event) {
    console.log(event);
  }

  onDeleted() {
    this.deleted.emit(this.id);
  }

}
