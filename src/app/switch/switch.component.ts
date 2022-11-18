import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  wish:any="";

  public contact='about';
  value(drp:any){
    this.contact=drp.target.value;
  }

 
  constructor() { }

  ngOnInit(): void {
  }

}
