import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AddTodoComponent } from './component/add-todo/add-todo.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { UpdateTodoComponent } from './component/update-todo/update-todo.component';

export const routes: Routes = [
    {path: "Home", component:HomeComponent},
    {path: "AddTodo", component:AddTodoComponent},
    {path: "TodoList", component:TodoListComponent},
    {path: "UpdateTodo/form", component:UpdateTodoComponent},
    {path: "UpdateTodo/:id", component:UpdateTodoComponent}
];
