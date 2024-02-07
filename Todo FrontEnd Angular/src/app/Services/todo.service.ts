import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../Models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseApiUrl:string="https://localhost:7165/api/Todo";

  constructor(private http:HttpClient) { }

  getAllTodo=():Observable<Todo[]>=>this.http.get<Todo[]>("https://localhost:7165/api/Todo");

  addTodo=(data:Todo)=>this.http.post(this.baseApiUrl,data);

  getTodo=(id:number):Observable<Todo>=> this.http.get<Todo>(this.baseApiUrl+"/id:int?id="+id);
  
  deleteStudent=(id:number)=> this.http.delete(this.baseApiUrl+"/"+id);

  editStudent=(id:number,data:Todo)=> this.http.put(this.baseApiUrl+"/"+id,data);
}