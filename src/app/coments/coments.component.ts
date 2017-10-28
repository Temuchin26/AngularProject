import { Component, OnInit } from '@angular/core';
import { PostService } from 'app/_service/post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.sass'],
  providers: [PostService]
})
export class ComentsComponent implements OnInit {

  coments;
  load = true;
  
  constructor(
    private ps: PostService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.router.paramMap
    .switchMap((params: ParamMap) => this.ps.getComent(+params.get('id')))
    .subscribe(res => {
      this.coments = res.json();
      this.load = false;
    })

  }

}
