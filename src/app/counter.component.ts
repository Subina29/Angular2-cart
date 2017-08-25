import { Component, Input, Output, EventEmitter } from '@angular/core';
import {ItemService} from './services/item.service';
import {CartItemSelection} from './cart-item-selection.interface';

@Component({
  selector: 'my-counter',
  template: `
  <div class="counterShell">
    <label #lab [id]="itemCode">{{countr}}</label>
    <button class="btn btn-secondary" (click)="dec(itemCode, $event)" title="smaller" [disabled]='lab.innerHTML=="0" ? true : false'>-</button>
    <button class="btn btn-secondary" (click)="inc(itemCode, $event)" title="bigger">+</button>
  </div>`
})
export class CounterComponent {
  @Input()  countr: number = 1;
  @Output() countrChange:EventEmitter<number> = new EventEmitter<number>();
  @Input() itemCode:number;
  totalCost:number;
  elem:string;

  constructor(private itemService:ItemService) {}

  dec(iCode:number, event:any) { 
    let elem = event.target.parentNode.childNodes[1];
    let countrValue:number = elem.innerHTML;
    
    this.resize(countrValue, -1);
    
    //event.target.parentNode.childNodes[1].innerHTML = this.countr;
    //this.itemService.updateCount(iCode, -1);
    //this.totalCost = this.itemService.calculateTotalCost();
  }
  inc(iCode:number, event:any) { 
    let elem = event.target.parentNode.childNodes[1];
    let countrValue:number = elem.innerHTML;
    this.resize(countrValue, +1);
    //event.target.parentNode.childNodes[1].innerHTML = this.countr;
    //this.itemService.updateCount(iCode, +1);
    //this.totalCost = this.itemService.calculateTotalCost();
  }
  resize(countrVal:number, delta: number):void {
    this.countr = +countrVal + delta;
    this.countrChange.emit(this.countr);
    //return this.countr;
  }
  
}



