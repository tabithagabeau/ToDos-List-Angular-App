import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TodosService } from 'src/app/services/todos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specific-task',
  templateUrl: './specific-task.component.html',
  styleUrls: ['./specific-task.component.css']
})
export class SpecificTaskComponent implements OnInit {

  todos = new FormGroup({
    title: new FormControl('')
  });

  itemId = new FormGroup({
    id: new FormControl('')
  });

  todoWithId = new FormGroup({
    title: new FormControl(''),
    id: new FormControl('')
  });


  constructor(private route: ActivatedRoute, private todoServ: TodosService) { }

  postTodoEc2(todoSub: FormGroup) {
    let form = JSON.stringify(todoSub.value);
    console.log('form in postTodoEC2: ' + form);
    this.todoServ.postTodo(form).subscribe(
      () => {
        console.log('post success');
      }
    );
  }

  getTodoEc2ById(itemId: FormGroup) {
    let id = itemId.get('id').value;
    this.todoServ.getTodoById(id).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  deleteTodoEc2ById(itemId: FormGroup) {
    let id = itemId.get('id').value;
    console.log('id in deleteTodoEc2ById: ' + id);
    this.todoServ.deleteTodoById(id).subscribe(
      response => {
        console.log('Todo #' + id + ' Deleted');
      }
    );
  }

  completeTodoEc2ById(itemId: FormGroup) {
    let id = itemId.get('id').value;
    console.log('id in completeTodoEc2ById: ' + id);
    this.todoServ.completeTodoById(id).subscribe(
      response => {
        console.log('Todo #' + id + ' marked completed');
      }
    );
  }

  putTodoEc2(todoSub: FormGroup) {
    let form = JSON.stringify(todoSub.value);
    this.todoServ.putTodo(form).subscribe(
      () => {
        console.log('update success');
      }
    );
  }




  ngOnInit(): void {
  }

}
