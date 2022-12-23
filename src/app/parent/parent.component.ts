import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  message = "Employee data Form";
  empItem = "";
  today = new Date();
  Items:Array<string> = [];
  constructor() { }

  ngOnInit(): void {
  }
  AddItem(e:any){
    if(e!== "" && e!==undefined){
      this.Items.push(e);
    }
    
  }
}
