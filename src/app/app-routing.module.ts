import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
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
