import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TodoService } from '../../Services/todo.service';
import { JsonPipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe,RouterLink],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent implements OnInit ,OnDestroy{
  form!:FormGroup
  todoformSubscription!:Subscription;
  todoService = inject(TodoService);
  /**
   *
   */
  constructor(private fb:FormBuilder, private activatedRouter:ActivatedRoute) {
    
    
  }

  ngOnDestroy(): void {
    this.todoformSubscription.unsubscribe();
  }

  onSubmit(){
    this.todoService.addTodo(this.form.value).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }
  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      {
        next:(res)=>{
          console.log(res['todoID']);
          this.todoService.getTodo(res['todoID']).subscribe({
            next:res=>{
              console.log(res);
            },
            error:err=>{
              console.log(err);
            }
          })
        },
        error:err=>{
          console.log(err)
        }
      }
    )
    this.form = this.fb.group({
      title:[] ,
      description:[],
      createdDate :[],
      isFinished:[]  
    })
  }
}
