import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  routeState: any;
  createUserForm!: FormGroup;
  currUserID: any;
  baseURL: string = "http://localhost:8080/users/";

  constructor(
      private router: Router,
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private http: HttpClient
      ) { 

  }

  ngOnInit(): void {
    this.createUserForm = this.fb.group({
      id: '',
      login:'',
      password:'',
      firstname:'',
      lastname:'',
      age:''
    });
  }

  async onSubmit(form: FormGroup) {
    let body: User = {
      id: form.value.id,
      login: form.value.login,
      password: form.value.password,
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      age: form.value.age,
      isdeleted: false,
    }

    await this.http.post(this.baseURL + "/addUser", body)
      .subscribe((data)=> {
        console.log(data);
        this.router.navigate(['manage']);
      });
   
  }

}
