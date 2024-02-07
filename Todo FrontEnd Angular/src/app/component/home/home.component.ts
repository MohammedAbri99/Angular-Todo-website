import { Component } from '@angular/core';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { UpdateTodoComponent } from '../update-todo/update-todo.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    AddTodoComponent,
    TodoListComponent,
    UpdateTodoComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
