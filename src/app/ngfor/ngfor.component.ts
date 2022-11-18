import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  fruitList:string[]=["apple","orange","banana"];
  fruit:string="";

  constructor() { }

  ngOnInit(): void {
  }
  increase(){
    this.fruitList.push(this.fruit);
    this.fruit="";
    
  }

}
