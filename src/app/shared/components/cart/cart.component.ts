import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor() {
    this.link = '';
    this.src = '';
    this.title = '';
    this.message = '';
  }

  @Input() link: string;
  @Input() src: string;
  @Input() title: string;
  @Input() message: string;
}
