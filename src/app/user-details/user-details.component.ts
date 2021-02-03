import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //import router
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { getSafePropertyAccessString } from '@angular/compiler';
import { Observable } from 'rxjs'
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }  //create instance
  posts:any;
  slug:any;
  responseText:any;

  
  getPosts(slug){
    
    var url = 'http://jsonplaceholder.typicode.com/users/' + slug;
    this.posts = this.http.get(url);
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params.slug
    })
    this.getPosts(this.slug);
    console.log(this.posts);
  }

}

