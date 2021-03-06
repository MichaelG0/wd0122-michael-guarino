import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, concatMap } from 'rxjs';
import { IPost } from '../interfaces/ipost';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiUrl = 'http://localhost:4201/posts/';

  constructor(private http: HttpClient) {}

  newPost(post: IPost) {
    return this.http.post(this.apiUrl, post);
  }

  getPosts() {
    return this.http.get(this.apiUrl);
  }

  getPost(id: number) {
    return this.http.get(this.apiUrl + id)
  }

  deletePosts(ids: number[]) {
    return from(ids).pipe(
      concatMap((id) => this.http.delete(this.apiUrl + id))
    );
  }

  newComment(id: number, comment: Partial<IPost>) {
    return this.http.patch(this.apiUrl + id, comment);
  }

}
