import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Todo } from '../../Models/todo';
import { TodoService } from '../../Services/todo.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [RouterLink,AsyncPipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {

  todos$!:Observable<Todo[]>;
  // toaseterService!:ToastrService;
  todoServices = inject(TodoService);
  // private todoService = inject(TodoService)

  constructor(private todoService:TodoService,
    private toaseterService:ToastrService ){

  }

  ngOnInit(): void {
    this.getStudents();

    // this.loadTodos();
    // this.todoServices.getAllTodo()
    // .subscribe({
    //   next:(res)=>{
    //     console.log(res)
    //   },
    //   error:(err)=>{console.log(err)}
    // })
  }
  delete(id:number){
    this.todoServices.deleteStudent(id)
    .subscribe({
      next:(res)=>{
        this.toaseterService.success("Deleted Successfully");
        this.getStudents();
      }
    })
  }

  private getStudents(): void {
    this.todos$=this.todoServices.getAllTodo()
  }
  // loadTodos(){
  //   this.todoService.getTodos().subscribe({
  //     next:(res)=>{
  //       this.todos = res;
  //       console.log(res);
  //     },
  //     error:(eror) => console.log('Error Fetching Todos',eror)
  //   });
  // }

}
