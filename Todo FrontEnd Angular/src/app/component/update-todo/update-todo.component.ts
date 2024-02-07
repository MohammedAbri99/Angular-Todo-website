import { JsonPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, inject, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TodoService } from '../../Services/todo.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-todo',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe,RouterLink],
  templateUrl: './update-todo.component.html',
  styleUrl: './update-todo.component.scss'
})
export class UpdateTodoComponent implements OnInit,OnDestroy{
  form!:FormGroup
  todoformSubscription!:Subscription;
  paramsSubscription!:Subscription;
  // todoService = inject(TodoService);
  id=0;
  isEdit=false;
  /**
   *
   */
  constructor(private fb:FormBuilder ,
     private activatedRouter:ActivatedRoute, 
     private router:Router,
     private toaseterService:ToastrService,
     private todoService:TodoService) {
    
    
  }

  ngOnDestroy(): void {
    if(this.todoformSubscription){
      this.todoformSubscription.unsubscribe();
    }
    if(this.todoformSubscription){
      this.paramsSubscription.unsubscribe();
    }
  }

  onSubmit(){
    if(!this.isEdit){
      this.todoformSubscription = this.todoService.addTodo(this.form.value).subscribe({
        next:(res)=>{
          console.log(res);
          this.toaseterService.success("Student succesfully add")
          this.router.navigateByUrl('/TodoList')
        },
        error: (err: any) => {
          console.log(err);
        }
      })
    }else{
      console.log(this.id);
      this.form.value.todoId=this.id;
      this.todoService.editStudent(this.id,this.form.value).subscribe({
        next:value=>{
          this.toaseterService.success("Edited successfully");
          this.router.navigateByUrl('/TodoList');
        },error:err=>{
          this.toaseterService.error("Unable to edit");
        }
      })
    }

  }
  ngOnInit(): void {
    this.paramsSubscription=this.activatedRouter.params.subscribe(
    {
      next:(res)=>{
        console.log(res['id']);
        let id = res['id'];
        this.id = id;
        if(!id) return;
        this.todoService.getTodo(res['id']).subscribe({
          next:res=>{
            this.form.patchValue(res);
            this.isEdit=true
          },
          error:err=>{
            console.log(err);
          }
        })
      },
      error:err=>{
        console.log(err)
      }
    })
    this.form = this.fb.group({
      title:[] ,
      description:[],
      // createdDate :[], 
      isFinished:[false]  
    })
  }
}
