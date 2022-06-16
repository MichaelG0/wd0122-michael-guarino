import {
  Component,
  ElementRef,
  HostListener,
  Injectable,
  Input,
  OnInit,
} from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { AuthService } from 'src/app/services/auth.service';
import { PostsService } from 'src/app/services/posts.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  @Input() post!: Post;
  edit: boolean = false;
  caption!: string;
  liked: boolean = false;
  likedArray: number[] = [];

  constructor(
    private postsSrv: PostsService,
    private authSrv: AuthService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.caption = this.post.caption;
    this.getLikedPosts();
  }

  modificaPost(id: number, caption: string) {
    this.edit = !this.edit;
    this.postsSrv
      .modificaPost(id, { caption: caption })
      .subscribe((res: any) => {
        console.log(res);
        this.post = res;
      });
  }

  like() {
    let id: number = JSON.parse(localStorage.getItem('user')!).id;
    this.liked = !this.liked;

    if (!this.likedArray.includes(id)) {
      this.likedArray.push(id);
      this.postsSrv
        .modificaPost(this.post.id, { liked: this.likedArray })
        .subscribe((res) => {});
    } else {
      this.likedArray = this.likedArray.filter((i) => i !== id);
      this.postsSrv
        .modificaPost(this.post.id, { liked: this.likedArray })
        .subscribe((res) => {});
    }
  }

  isUserLogged() {
    return this.authSrv.isUserLogged();
  }

  getLikedPosts(): void {
    if (JSON.parse(localStorage.getItem('user')!)) {
      const id = JSON.parse(localStorage.getItem('user')!).id;
      this.liked = this.post.liked.includes(id);
      this.postsSrv.getPost(this.post.id).subscribe((res: any) => {
        for (let like of res.liked) {
          this.likedArray.push(like);
        }
      });
    }
  }

  deletePost() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.postsSrv.deletePost(this.post.id).subscribe(() => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )}
        );
      }
    })
  }

  // @HostListener('document:click', ['$event.target'])
  // public onPageClick(targetElement: any) {
  //   const clickedInside = this.elementRef.nativeElement.contains(targetElement);
  //   if (!clickedInside) {
  //     this.edit = !this.edit
  //   }
  // }
}
