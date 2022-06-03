import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/classes/todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todo!: Todo[];
  stillTodo: Todo[];
  title!: string;

  constructor(private todosServ: TodosService) {
    this.todo = todosServ.todo;
    this.stillTodo = this.filterStillTodo();
  }

  ngOnInit(): void {}

  filterStillTodo(): Todo[] {
    return this.todo.filter((item) => item.completed == false);
  }

  save() {
    if (this.title){
      let newListItem = new Todo(this.todo.length + 1, this.title, false);
      this.todosServ.addTodo(newListItem);
      this.stillTodo = this.filterStillTodo();
      this.title = ''
    }
  }

  done(item: Todo) {
    this.todosServ.completed(item);
    this.stillTodo = this.filterStillTodo();
  }

  remove(item: Todo) {
    this.todosServ.delete(item);
    this.stillTodo.splice(this.stillTodo.indexOf(item), 1);
  }
}
