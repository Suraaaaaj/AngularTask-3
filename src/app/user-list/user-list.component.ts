import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users! : User[]; 
  currRoute : String;
  loading: boolean = true;
  baseURL: string = "http://localhost:8080/users/";
  
  constructor(private router: Router,private http: HttpClient) {
      this.currRoute = this.router.url;
      this.getUsers();
   }

  ngOnInit(): void {
   
  }

  async getUsers(){
    await this.http.get<User[]>(this.baseURL + '/allUsers')
      .subscribe((data) => {
        console.log(data);
        this.users = data;
        this.loading = false;
      });
  }
}
