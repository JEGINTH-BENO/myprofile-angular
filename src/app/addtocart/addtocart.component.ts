import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  products: number=0;

  constructor() { }

  ngOnInit(): void {
  }
  AddProducts(){
    this.products = ++ this.products
  }
  RemoveProducts(){
    this.products= -- this.products
  }

}
