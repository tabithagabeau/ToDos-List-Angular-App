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
    id: new FormControl('')
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
    console.log('form in postTodoEC2: ' + form);
    this.todoServ.postTodo(form).subscribe(
      () => {
        console.log('post success');
      }
    );
  }

  getTodoEc2ById(id) {
    this.todoServ.getTodoById(id).subscribe(
      response => {
        this.currentTitle = response["title"];
        this.currentStatus = response["completed"];
        this.currentCreateDate = response["createdOn"];
        console.log(this.currentStatus);
        console.log(response);
      }
    );
  }

  deleteTodoEc2ById(id) {
    console.log('id in deleteTodoEc2ById: ' + id);
    this.todoServ.deleteTodoById(id).subscribe(
      response => {
        // this.currentTitle = response["title"];
        // this.currentStatus = response["complete"];
        // this.currentCreateDate = response["createdOn"];
        console.log(response);
        console.log('Todo #' + id + ' Deleted');
      }
    );
  }

  completeTodoEc2ById(id) {
    console.log('id in completeTodoEc2ById: ' + id);
    this.todoServ.completeTodoById(id).subscribe(
      response => {
        console.log('Todo #' + id + ' marked completed');
      }
    );
  }

  putTodoEc2(todoSub: FormGroup) {
    let form = JSON.stringify(todoSub.value);
    console.log('putTodoEc2 form:' + form);
    this.todoServ.putTodo(form).subscribe(
      () => {
        console.log('update success');
      }
    );
  }

  putTodoEc22(tempid:string, temptask: string, tempdate: string, tempstatus: string) {
    console.log('id in putTodoEc22: ' + tempid);
    console.log('task in putTodoEc22: ' + temptask);
    console.log('date in putTodoEc22: ' + tempdate);
    console.log('status in putTodoEc22: ' + tempstatus);
    let date: Date = new Date();
    // let month: string = '0'
    // let day: string = 
    let formattedDate: string = date.getFullYear() + '-' + '07' + '-' + date.getDate();
//    let formattedDate: string = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    console.log('formatted Date: ' + formattedDate);
    let form = {id: tempid, title: temptask, createdOn: formattedDate, completed: false}
    //    let form = JSON.stringify(todoSub.value);
    console.log('putTodoEc22 form:' + form);
    this.todoServ.putTodo(form).subscribe(
       () => {
         console.log('update success');
       }
     );
  }


  ngOnInit(): void {
    this.getTodoEc2ById(this.route.snapshot.paramMap.get('id'));
    this.currentId = this.route.snapshot.paramMap.get('id');
//    this.currentTitle = this.
    // = this.getTodoEc2ById(currentId);
  }



}
