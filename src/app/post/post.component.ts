import { Component, OnInit } from '@angular/core';
import { PostService } from 'app/_service/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
  providers: [PostService]
})
export class PostComponent implements OnInit {

  posts;
  load = true;
  
  constructor(
    private ps: PostService
  ) { }

  ngOnInit() {
    this.ps.getPost()
      .then(res => {
        this.posts = res.json();
        this.load = false;
      })
  }

}
