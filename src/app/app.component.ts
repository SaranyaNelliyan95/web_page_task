import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'web_page_task';
  IsLoggedIn$: Observable<boolean> | undefined;
  
  constructor(private router: Router, private authservice: AuthserviceService){

  }
  changeButton(event: any){
    if(event.currentTarget.innerText == "Blog"){
      $(document).ready(function(){
        $(".active").removeClass("active");
        $("#blogLink").addClass("active");
     });
    }else if(event.currentTarget.innerText == "Users"){
      $(document).ready(function(){
        $(".active").removeClass("active");
        $("#userLink").addClass("active");
     });
    }else{
      $(document).ready(function(){
        $(".active").removeClass("active");
        $("#homeLink").addClass("active");
     });
    }
  }
  userNavigate(){
    this.router.navigate(['/users']);  
  }
  Logout(){
    this.authservice.logout();
    this.IsLoggedIn$ = this.authservice.isLoggedIn;
  }
  ngOnInit():void{
    this.authservice.login();
    this.IsLoggedIn$ = this.authservice.isLoggedIn;
  }
} 
