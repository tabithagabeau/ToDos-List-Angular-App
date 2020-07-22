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
  filteredTodos: ITodos[];
  attributeListFilter = 'Search task';

  constructor(private todoServ: TodosService) { 
      // if {this.attributeListFilter != 'Search task'} 
      this.filteredTodos = this.todos;
  }

    
    getTodosEc2() {
      this.todoServ.getTodos().subscribe(
        response => {
          console.log(response);
        }
      );
    }

    getTodosEc22() {
      const todosObservable = this.todoServ.getTodos();
      todosObservable.subscribe((todosData: ITodos[]) => {
        this.todos = todosData;
          });
    }

    ngAfterViewInit(){
      this.getTodosEc22();
    } 
      
    get listFilter(): string{
      return this.attributeListFilter;
    }

    set listFilter(temp: string){
      this.attributeListFilter = temp;
      this.filteredTodos = this.attributeListFilter ?
      this.performFilter(this.attributeListFilter) : this.todos;
    }

    performFilter(filterBy: string): ITodos[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.todos.filter((task:ITodos)=>
      task.title.toLocaleLowerCase().indexOf(filterBy) !==-1);
    }
   

  ngOnInit(): void {
  }

}
