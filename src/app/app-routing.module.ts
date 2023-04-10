import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';

const routes: Routes = [
  {
    path: 'tasks', component: TasksComponent,
  },
  {
    path: 'list-tasks', component: ListTasksComponent
  },
  {
    path: '', redirectTo: 'list-tasks', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
