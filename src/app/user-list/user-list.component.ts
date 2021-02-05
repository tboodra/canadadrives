import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private http: HttpClient) { }  //create instance
  posts:any;
  searchText = "";
  sortResultsBy = "name";
  getPosts(){
    var url = 'http://jsonplaceholder.typicode.com/users/';
    return this.http.get(url);
  }
  ngOnInit(): void {

    this.getPosts().subscribe((res) => (this.posts = res));

    //console.log(this.posts);
  }
}



