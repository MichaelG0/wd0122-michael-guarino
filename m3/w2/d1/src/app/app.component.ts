import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'd1';
  nomi: any[] = []
  url: string = 'https://jsonplaceholder.typicode.com/users'

  ngOnInit(): void {
    fetch(this.url).then(res => res.json()).then(res => {
      this.nomi = res
    })
  }

  add() {

  }

  remove(id: number) {
    alert(`user ${id} deleted successfully`)
  }

  details(id: number) {
    alert(
      JSON.stringify(this.nomi[id])
    )
  }
}
