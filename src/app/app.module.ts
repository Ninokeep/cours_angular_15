import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { TasksFormComponent } from './tasks-form/tasks-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ListTasksComponent,
    TasksFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
