import { Injectable } from '@angular/core';
import { Observable, map, reduce } from 'rxjs';
import { Tasks } from '../utils/tasks';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Tasks[]> {

    return this.http.get<Tasks[]>('http://localhost:3000/tasks');
  }

  addTasks(newTask: Tasks): Observable<Tasks> {
    console.log(newTask);

    return this.http.post<Tasks>('http://localhost:3000/tasks', { ...newTask });
  }
}
