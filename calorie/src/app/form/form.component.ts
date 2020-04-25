import { Component, OnInit } from '@angular/core';
import { items } from '../items';
import { food } from '../food';
//import {foodSearch} from '../food-search';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  items: food[];
  newItem: any = {};
  constructor() { }

  ngOnInit(): void {
    this.items = items;
  }
  addItem(newItem): any {
  //newitem count is displayed
    newItem.count = 0;
  //new item is added 
    this.items.unshift(newItem);
  }
}