import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {

  constructor(
    private http: Http
  ) { }

  getPost(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .toPromise()
  }

  getComent(id){
    return this.http.get('https://jsonplaceholder.typicode.com/comments?postId='+id)
      .toPromise()
  }

}
