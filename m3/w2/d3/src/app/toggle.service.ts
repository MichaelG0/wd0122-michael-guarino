import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  constructor() { }

  toggle(e:Post){
    e.active = !e.active
  }
}
