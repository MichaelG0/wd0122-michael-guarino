import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/classes/todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  todo!: Todo[]
  completed: Todo[]
  title!: string

  constructor(private todosServ: TodosService) {
    this.todo = todosServ.todo
    this.completed = this.todo.filter(item => item.completed == true)
  }

  ngOnInit(): void {
  }

}
