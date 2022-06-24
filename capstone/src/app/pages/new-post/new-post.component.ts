import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPost } from 'src/app/interfaces/ipost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  postForm!: FormGroup;

  constructor(private postSrv: PostService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      caption: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  onSubmit(form: FormGroup){
    const post: IPost = {
      title: form.value.title,
      caption: form.value.caption,
      
    };
    this.postSrv.newPost(post).subscribe()
  }

}
