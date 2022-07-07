import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalConstants } from 'src/app/globalConstants';
import { User } from '../../user';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  
  currUser!:string;
  user!: User;
  baseURL = GlobalConstants.apiURL;
  loading: boolean = true;
  constructor(private http:HttpClient, private route: ActivatedRoute) {
    // this.user = {
    //     id: "string",
    //     firstname: "string",
    //     lastname: "string",
    //     age: 0,
    //     login: "string",
    //     password: "string",
    //     isdeleted: false
    // }
    this.currUser = this.route.snapshot.params['id'];
    
    this.getUser();
   }

   ngOnInit(): void {
    
   }

   async getUser(){
    this.user =  await this.http.get<any>(this.baseURL + this.currUser).toPromise();
    this.loading = false;    

   }
  

}
