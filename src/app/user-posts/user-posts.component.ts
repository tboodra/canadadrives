import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) {} //create instance
  posts: any;
  slug: any;

  getPosts(slug) {
    var url = 'http://jsonplaceholder.typicode.com/posts?userId=' + slug;
    return this.http.get(url);
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.slug = params.slug;
    });
    this.getPosts(this.slug).subscribe((res) => (this.posts = res));
  }
}
