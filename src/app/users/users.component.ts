import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {getFormValidationErrors} from '../Validators/contactValidator';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersForm: FormGroup | any;
  contactLengthError=false;contactPatternError=false;
  contactLengthErrorText = "Contact should be in 10 digit";contactPatternErrorText ="Contact is invalid";
  constructor(private Fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.usersForm = this.Fb.group({
      name: ["", Validators.required],
      contact: ["", Validators.compose([Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10),Validators.maxLength(10)])],
      email: ["", Validators.required],
    })

  }
  trackContact(){
    this.usersForm.get('contact').valueChanges.subscribe((data:any)=>{
      let error = getFormValidationErrors(this.usersForm);
      if(error[0] !== undefined){
        if(error[0].error == 'minlength' || error[0].error == 'maxlength'){
          this.contactLengthError = true;
        }
        if(error[0].error == 'pattern'){
          this.contactPatternError = true;
        }
      }
      if(data == ""|| data == undefined){
        this.contactLengthError = false;
        this.contactPatternError = false;
      }
    })
  }
  back(){
    this.router.navigate(['']);
  }
  onSubmit(){
    localStorage.setItem('name',this.usersForm.get('name').value);
    localStorage.setItem('contact',this.usersForm.get('contact').value);
    localStorage.setItem('email',this.usersForm.get('email').value);
    this.router.navigate(['']);
  }
}
