import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  routeState: any;
  myForm!: FormGroup;
  currUserID: any;
  baseURL: string = "http://localhost:8080/users/";

  constructor(
      private router: Router,
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private http: HttpClient
      ) { 
    this.routeState = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.routeState);
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      password: '',
      age:''
    });
  }

  async onSubmit(form: FormGroup) {
    this.currUserID = this.route.snapshot.params['id'];
    let body: User = {
      id: this.currUserID,
      login: this.routeState.user.login,
      password: form.value.password,
      firstname: this.routeState.user.firstname,
      lastname: this.routeState.user.lastname,
      age: form.value.age,
      isdeleted: this.routeState.user.isdeleted,
    }

    await this.http.put(this.baseURL + this.currUserID, body)
      .subscribe((data)=> {
        console.log(data);
        this.router.navigate(['manage']);
      });
   
  }

}
