import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  apiUrl = 'http://localhost:4201/posts'

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get<Post[]>(this.apiUrl)
  }

  getPost(id:number){
    return this.http.get(this.apiUrl + "/"+ id)
  }

  modificaPost(id:number, post:Partial<Post>){
    console.log(post);

    return this.http.patch(this.apiUrl + "/" + id , post )
  }
}
