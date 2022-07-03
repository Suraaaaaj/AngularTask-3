import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection : ChangeDetectionStrategy.Default
})
export class UserComponent implements OnInit {
  @Input() curr!: any;
  currRoute: any;
  allowedUser = false;
  myBorder : any;
  myRoute: string = "";
  baseURL: string = "http://localhost:8080/users/";
  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient) {
    this.currRoute = this.router.url;
  }
  
  ngOnInit(): void {
    if(this.currRoute=='/active' && this.curr.isdeleted == false){
      this.allowedUser =  true;
      this.myBorder = '1px solid #69c369';
    }else if(this.currRoute=='/deleted' && this.curr.isdeleted == true){
      this.allowedUser =  true;
      this.myBorder = '1px solid #cb4747';
    }else if(this.currRoute=="/manage" || this.currRoute.split('/').length==3) {
      
      this.allowedUser = true;
      if(this.curr.isdeleted == true) this.myBorder = '1px solid #cb4747';
      else this.myBorder = '1px solid #69c369';
    }
    // console.log(this.router);
  }

  getUserStatus(){
    if(this.currRoute=='/active'){
      return "Deactivate";
    }else if(this.currRoute=='/deleted'){
      return "Activated";
    }else{
      return "Details";
    }
  }

  changeStatusOrViewDetails(){
   if(this.currRoute == '/active' || this.currRoute == "/deleted"){

      this.myRoute = this.currRoute =='/active'? "deactivate/":"activate/";

      this.http.put(this.baseURL + this.myRoute + this.curr.id,"")
            .subscribe((data) => console.log(data));

      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl], {relativeTo:this.route});
      });

   }else{
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['/manage/'+ this.curr.id]);
      });
   }
  }

  editUser(){
    this.router.navigate(['edit/' + this.curr.id ],{relativeTo: this.route, state:{user: this.curr}});
  }
}
