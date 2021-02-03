import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //import router
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { getSafePropertyAccessString } from '@angular/compiler';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private http: HttpClient) { }  //create instance
  posts:any;
  getPosts(){
    this.posts = this.http.get('http://jsonplaceholder.typicode.com/users/');
  }
  ngOnInit(): void {

    this.getPosts();
    console.log(this.posts);
  }
}
