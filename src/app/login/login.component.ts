import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private Fb: FormBuilder, private router: Router, private authservice: AuthserviceService) { }

  ngOnInit(): void {
    localStorage.removeItem("UserName");
    localStorage.removeItem("password");
    localStorage.removeItem("name");
    localStorage.removeItem("contact");
    localStorage.removeItem("email");
    this.loginForm = this.Fb.group({
      userName:["New User"],
      password:["123456"]
    })

  }
  submit(){
    localStorage.setItem("UserName",this.loginForm.get("userName")?.value);
    localStorage.setItem("password",this.loginForm.get("password")?.value);
    this.authservice.login();
    this.router.navigate(['/']);
  }
}
