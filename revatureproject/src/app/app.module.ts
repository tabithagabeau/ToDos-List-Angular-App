import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosListComponent } from './todos-list/todos-list/todos-list.component';
import {TodosService} from './services/todos.service';
import {RouterModule} from '@angular/router';
import { SpecificTaskComponent } from './specific-task/specific-task/specific-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosListComponent,
    SpecificTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'alltasks', component: TodosListComponent},
      {path: 'specifictask/:id', component: SpecificTaskComponent}
      // {path: 'task/:tasktodo', component: SpecificTaskComponent}
    ])
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
