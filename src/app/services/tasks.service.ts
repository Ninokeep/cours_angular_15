import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, reduce, takeUntil } from 'rxjs';
import { Tasks } from '../utils/tasks';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private _tasks = new BehaviorSubject<Tasks[]>([]);

  _tasks$ = this._tasks.asObservable();

  private ngUnsubscribe$ = new Subject<void>();

  constructor(private http: HttpClient) {
  }

  getTasks() {

    this.http.get<Tasks[]>('http://localhost:3000/tasks').pipe(takeUntil(this.ngUnsubscribe$)).subscribe(item => {

      this._tasks.next(item);
    })
  }

  addTasks(newTask: Tasks) {
    this.http.post<Tasks>('http://localhost:3000/tasks', { ...newTask }).pipe(takeUntil(this.ngUnsubscribe$)).subscribe(item => {
      const currentTask = this._tasks.value;
      currentTask.push(item);
      this._tasks.next(currentTask);
    })
  }

  deleteTask(id: number) {

    this.http.delete(`http://localhost:3000/tasks/${id}`).pipe(takeUntil(this.ngUnsubscribe$)).subscribe()
  }

  unSubscribe() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

}
