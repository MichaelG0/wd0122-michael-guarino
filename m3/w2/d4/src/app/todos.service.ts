import { Injectable } from '@angular/core';
import { Todo } from './classes/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor() {}

  todo: Todo[] = [
    {
      id: 1,
      title: 'Imparare Angular',
      completed: true,
    },
    {
      id: 2,
      title: 'Inserire funzione add',
      completed: false,
    },
  ];

  addTodo(item: Todo): void {
    this.todo.push(item);
  }

  completed(item: Todo): void {
    item.completed = true;
  }

  delete(item: Todo){
    this.todo.splice(this.todo.indexOf(item), 1)
  }
}
