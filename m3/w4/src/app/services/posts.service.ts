import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  apiUrl = 'http://localhost:4201/posts'

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.apiUrl)
  }

}
