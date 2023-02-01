import { Component, Input, OnInit } from '@angular/core';
import { Medicine, Sale } from 'src/app/models/data.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() {
    this.fields = [];
    this.values = [];
    this.data = [];
  }

  @Input() data: Medicine[] | Sale[];
  @Input() fields: string[];
  @Input() values: string[];
  rowsPerPageOptions = [5, 10, 50]

  ngOnInit(): void {
    if (this.data.length < 0) return;

    // Object.keys(this.data[0])
    // .forEach(value => {
    //   this.values.push(value);
    // });
  }

}
