import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TodosService } from 'src/app/services/todos.service';
import { ActivatedRoute } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';

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
    // id: new FormControl('')
  });

//  todosFull: ITodos[];
  //  = new FormGroup({
  //   title: new FormControl(''),
  //   id: new FormControl(''),
  //   createdOn: new FormControl(''),
  //   completed: new FormControl('')
  // });

  currentId = '0';
  currentTitle = '';
  currentStatus = '';
  currentCreateDate = '';

  constructor(private route: ActivatedRoute, private todoServ: TodosService) { }

  postTodoEc2(todoSub: FormGroup) {
    let form = JSON.stringify(todoSub.value);
    // console.log('form in postTodoEC2: ' + form);
    this.todoServ.postTodo(form).subscribe(
      () => {
        // console.log('post success');
        // this function is performed in service class by post method: json takes the http response to create form
        }
      );
    }
  
    getTodosEc2() {
      this.todoServ.getTodos().subscribe(
        response => {
          console.log(response);
      }
    );
  }

  getTodoEc2ById(id) {
    this.todoServ.getTodoById(id).subscribe(
      response => {// service bring the json responses based on swagger  values: "title", "completed", "createdOn"
        this.currentTitle = response["title"];
        this.currentStatus = response["completed"];
        this.currentCreateDate = response["createdOn"];
      }
    );
  }

  deleteTodoEc2ById(id) {
    console.log('id in deleteTodoEc2ById: ' + id);
    this.todoServ.deleteTodoById(id).subscribe(
      () => { // this function is performed in service class by delete method and brought by http response
      }
    );
  }

  completeTodoEc2ById(id) {
    console.log('id in completeTodoEc2ById: ' + id);
    this.todoServ.completeTodoById(id).subscribe(
      response => {
        // console.log('Todo #' + id + ' marked completed');
        // this function is performed in service class by patch method and brought by http response
      }
    );
  }

  putTodoEc2(todoSub: FormGroup) {
    let form = JSON.stringify(todoSub.value);
    // console.log('putTodoEc2 form:' + form);
    this.todoServ.putTodo(form).subscribe(
      () => {
        // console.log('update success');
         // this function is performed in service class by put method and brought by http response
      }
    );
  }

  putTodoEc22(tempid: string, temptask: string, tempdate: string, tempstatus: string) {
    // console.log('id, task, date, and status in putTodoEc22: '+""+ tempid +"" + temptask +"" + tempdate +"" + tempstatus);
    let date: Date = new Date();
    // let month: string = '0'
    // let day: string =
    let formattedDate: string = date.getFullYear() + '-' + '07' + '-' + date.getDate();
//    let formattedDate: string = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    // console.log('formatted Date: ' + formattedDate);
    let form = {id: tempid, title: temptask, createdOn: formattedDate, completed: false};
    //    let form = JSON.stringify(todoSub.value);
    // console.log('putTodoEc22 form:' + form);
    this.todoServ.putTodo(form).subscribe(
       () => {
        //  console.log('update success');
       }
     );
  }


  ngOnInit(): void {
    this.getTodoEc2ById(this.route.snapshot.paramMap.get('id'));
    this.currentId = this.route.snapshot.paramMap.get('id');
  }



}
