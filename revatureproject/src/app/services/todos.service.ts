import { Injectable } from '@angular/core';
import { HttpHeaderResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodos } from '../todos-list/todos-list/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpCli: HttpClient) { }

  postTodo(todoForm): Observable<string> {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
    };
    return this.httpCli.post<string>('http://ec2-13-58-240-221.us-east-2.compute.amazonaws.com:8080/todos',
    todoForm, httpHead);
  }


  getTodos(): Observable<ITodos[]> {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
    };
    return this.httpCli.get<ITodos[]>('http://ec2-13-58-240-221.us-east-2.compute.amazonaws.com:8080/todos',
    httpHead);
  }

  getTodoById(itemId): Observable<string[]> {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
    };
    return this.httpCli.get<string[]>('http://ec2-13-58-240-221.us-east-2.compute.amazonaws.com:8080/todos/' + itemId, httpHead);
  }

  deleteTodoById(itemId): Observable<string[]> {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
    };
    return this.httpCli.delete<string[]>('http://ec2-13-58-240-221.us-east-2.compute.amazonaws.com:8080/todos/' + itemId, httpHead);
  }

  completeTodoById(itemId): Observable<string[]> {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
    };
    return this.httpCli.patch<string[]>('http://ec2-13-58-240-221.us-east-2.compute.amazonaws.com:8080/todos/' + itemId, httpHead);
  }

  putTodo(todoForm): Observable<string> {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
    };
    return this.httpCli.put<string>('http://ec2-13-58-240-221.us-east-2.compute.amazonaws.com:8080/todos',
    todoForm, httpHead);
  }
}
