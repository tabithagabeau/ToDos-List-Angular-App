import { Component, OnInit } from '@angular/core';
import {ITodos} from './todos';
import { TodosService } from 'src/app/services/todos.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  todos: ITodos[];

  constructor(private todoServ: TodosService) { }

    
    getTodosEc2() {
      this.todoServ.getTodos().subscribe(
        response => {
          console.log(response);
          console.log(response[0].title);
        }
      );
    }

    getTodosEc22() {
      const todosObservable = this.todoServ.getTodos();
      todosObservable.subscribe((todosData: ITodos[]) => {
        this.todos = todosData;
          });
    }
      
    

   

  ngOnInit(): void {
  }

}
