import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input('parentData') public greeting: any; 
  @Output() public eventEmitter = new EventEmitter;
  empName:any;
  constructor() { }

  ngOnInit(): void {
    this.greeting;

  }
  Addemployee(){
    // this.eventEmitter.emit(item);
    this.eventEmitter.emit(this.empName);
    this.empName = "";
    
  }
}
