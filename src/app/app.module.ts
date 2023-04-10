import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { TasksFormComponent } from './tasks-form/tasks-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from './tasks/dialog/dialog.component';
import { DialogTaskOpenComponent } from './tasks/dialog/dialog-task-open/dialog-task-open.component';
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogService } from './tasks/dialog/services/dialog.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { TrimWordDirective } from './shared/trim-word';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ListTasksComponent,
    TasksFormComponent,
    DialogComponent,
    DialogTaskOpenComponent,
    TrimWordDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  },
    DialogService,
    AuthGuard,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
