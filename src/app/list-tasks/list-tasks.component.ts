import { Component, OnDestroy, OnInit } from '@angular/core';
import { Tasks } from '../utils/tasks';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit, OnDestroy {

  public tasks: Tasks[] = [];
  public loadingTasks = false;

  constructor(private tasksService: TasksService) {
  }

  ngOnInit(): void {
    this.tasksService.getTasks();

    this.tasksService._tasks$.subscribe((tasks: Tasks[]) => {

      this.tasks = tasks;
    })
  }

  onDeleteTask(id: number) {
    this.tasksService.deleteTask(id);
    this.tasksService.getTasks();
  }

  ngOnDestroy(): void {
    this.tasksService.unSubscribe();
  }

}
