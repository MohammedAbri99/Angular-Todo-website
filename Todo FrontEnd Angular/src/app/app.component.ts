import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { AddTodoComponent } from './component/add-todo/add-todo.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { UpdateTodoComponent } from './component/update-todo/update-todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  RouterOutlet, 
  HeaderComponent,
  FooterComponent,
  HomeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todoapp';
}
