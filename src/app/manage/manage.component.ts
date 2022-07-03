import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  currRoute!: String;
  routeLen!: any;
  id!: any;
  constructor(private router: Router,
          private route: ActivatedRoute) {
            
    this.id = this.route.snapshot.params;
    
   }

  ngOnInit(): void {
  }

  openCreateUserForm(){
    console.log("hi")
    this.router.navigate(['create'], {relativeTo: this.route});
  }

}
