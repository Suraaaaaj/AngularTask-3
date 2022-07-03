import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../user';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  
  currUser!:string;
  user: User;
  baseURL: string = "http://localhost:8080/users/";
  constructor(private http:HttpClient, private route: ActivatedRoute) {
    this.user = {
        id: "string",
        firstname: "string",
        lastname: "string",
        age: 0,
        login: "string",
        password: "string",
        isdeleted: false
    }
    this.currUser = this.route.snapshot.params['id'];
    
    this.http.get<User>(this.baseURL + this.currUser)
            .subscribe((data) => {
              console.log(data);
              this.user = data;
            });
    
   }

   ngOnInit(): void {
    
   }
  

}
