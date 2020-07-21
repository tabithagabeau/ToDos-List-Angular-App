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

  filteredTodos: ITodos[];
  attrListFilter = 'Search the Todos List';

  todos: ITodos[];


  constructor(private route: ActivatedRoute, private todoServ: TodosService) { }

  get listFilter(): string {
    return this.attrListFilter;
  }

  set listFilter(temp: string) {
    this.attrListFilter = temp;
    this.filteredTodos = this.attrListFilter ?
      this.performFilter(this.attrListFilter) : this.todos;
  }

  performFilter(filterBy: string): ITodos[] {
    filterBy = filterBy.toLocaleLowerCase();
    this.todoServ.getTodos().subscribe(
      todos => {
        console.log('Lenght ' + todos.length);
       return  this.todos.filter((myTodoslist: ITodos) =>
        myTodoslist.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
        console.log('Something 1 ' + todos.filter);
        });
      //  return this.todos.filter((myTodoslist: ITodos)) =>
    console.log('Something 2 ' + this.todos);
    return this.todos;

  }

    
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
    // this.currentHero = this.route.snapshot.paramMap.get('heroname');
  }

}
