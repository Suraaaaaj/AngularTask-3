import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from '../globalConstants';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users! : User[]; 
  currRoute : String;
  loading: boolean = true;
  baseUrl = GlobalConstants.apiURL;
  endPoint !: string;
  constructor(private router: Router,private http: HttpClient) {
      this.currRoute = this.router.url;
      this.getUsers();
   }
  

  ngOnInit(): void {
   
  }

  async getUsers(){
    
    if(this.currRoute=='/active') this.endPoint = '/activated';
    else if(this.currRoute=='/deleted') this.endPoint = '/deactivated';
    else this.endPoint = '/allUsers';
    await this.http.get<User[]>( this.baseUrl + this.endPoint)
      .subscribe((data) => {
        console.log(data);
        this.users = data;
        this.loading = false;
      });
  }

}
