import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { MedicineTableService } from 'src/app/common/services/medicine-table.service';
import { Medicine, Sale } from 'src/app/models/data.interface';
import { MedicinesService } from 'src/app/modules/medication-table/service/medicines.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(
    private _medicineSrv: MedicineTableService,
  ) {
    this.fields = [];
    this.values = [];
    this.data = [];
    this.valid = false;
  }

  @Input() data: Medicine[] | Sale[];
  @Input() fields: string[];
  @Input() values: string[];
  @ViewChild(Table) table!: Table;
  @Input() valid: boolean;
  rowsPerPageOptions = [5, 10, 50]

  ngOnInit(): void {
    if (this.data.length < 0) return;

    // Object.keys(this.data[0])
    // .forEach(value => {
    //   this.values.push(value);
    // });
  }
  generatedFieldValues() {
    return this.fields.map((e, i) => {
      return {
        field: e,
        value: this.values[i]
      }
    });
  }

  onInputFilter(event: Event) {
    const target = event.target as HTMLInputElement;
    this.table.filterGlobal(target.value, 'contains')
  }

  getDataForSale(obj: Medicine | Sale) {
    console.warn(obj);
    let _obj;
    if (obj.hasOwnProperty("factoryLaboratory")){
      _obj = obj as Medicine;
      this._medicineSrv.saleMedical(_obj, 4).subscribe(res => {
        console.log(res);
        const { msg } = res as any;
        alert(msg);
      });
    }
  }

  deleteMedicine(id: number) {
    console.warn(id);
  }

  updateMedicine(obj: Medicine) {
    console.warn(obj);
  }
}
