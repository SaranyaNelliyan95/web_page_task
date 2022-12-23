import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name: any;
  contact: any;
  email: any;
  constructor(private authservice : AuthserviceService) { }

  ngOnInit(): void {
    this.name = localStorage['name'];
    this.contact = localStorage['contact'];
    this.email = localStorage['email'];
  }

}
