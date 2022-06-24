import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/ipost';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() post!: IPost

  constructor() { }

  ngOnInit(): void {
  }

}
