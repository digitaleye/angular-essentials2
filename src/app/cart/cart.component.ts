import { Component, OnInit, Output, ViewEncapsulation, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
  @Input() items = [];
  @Output() itemAdded = new EventEmitter<string>();
  newItem = '';
  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    this.itemAdded.emit(this.newItem);
  }

}
