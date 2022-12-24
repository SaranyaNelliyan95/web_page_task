import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
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
  emailValidation: boolean = true;
  editField: any;
  constructor(private Fb: FormBuilder, private router:Router) { 
  }

  ngOnInit(): void {
    this.usersForm = this.Fb.group({
      name: ["", Validators.required],
      contact: ["", Validators.compose([Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10),Validators.maxLength(10)])],
      email: ["", Validators.required],
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
