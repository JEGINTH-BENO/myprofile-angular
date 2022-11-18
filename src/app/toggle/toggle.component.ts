import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  vehicleslist:boolean=false;



  constructor() { }

  ngOnInit(): void {
  }
  giveresult(){
    this.vehicleslist=!this.vehicleslist;
  }

}
