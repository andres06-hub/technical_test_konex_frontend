import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
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
    private _confirmationSrv: ConfirmationService
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
  modalVisible = false;
  unitTotal: number = 1;
  totalPrice: number = 0;

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

  modal(visible: boolean) {
    this.modalVisible = visible;
  }

  calculatePrice(obj: Medicine): number | string {
    const { unitValue, quantityStock } = obj;
    if (this.unitTotal > quantityStock) return 'Insufficient products';
    if (this.unitTotal <= 0) return 'Invalid quantity';
    const price = unitValue * this.unitTotal;
    this.totalPrice = price;
    return price;
  }

  onInputFilter(event: Event) {
    const target = event.target as HTMLInputElement;
    this.table.filterGlobal(target.value, 'contains')
  }

  sellMedicine(event: Event, obj: Medicine, visible: boolean) {
    console.warn(this.unitTotal +' - '+this.totalPrice);
    // this.getDataForSale(obj);
    this._confirmationSrv.confirm({
      target: event.target || undefined,
      message: `Selling this product?`,
      icon: 'pi pi-info',
      accept: () => {
        this.modalVisible = visible;
        this.getDataForSale(obj);
      }
    });
  }

  confirm(event: Event, obj: Medicine, msg: String) {
    const { id, name } = obj;
    this._confirmationSrv.confirm({
      target: event.target || undefined ,
      message: `${msg} this product?
                ${id} - ${name}`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (msg === 'Upgrade')
          return this.updateMedicine(obj);
        if (msg === 'Remove')
          return this.deleteMedicine(id);
      },
    });
  }

  getDataForSale(obj: Medicine | Sale) {
    console.warn(obj);
    let _obj;
    if (obj.hasOwnProperty("factoryLaboratory")){
      _obj = obj as Medicine;
      this._medicineSrv.saleMedical(_obj, this.unitTotal)
      .subscribe(res => {
        console.log(res);
        const { msg } = res as any;
        alert(msg);
      });
    }
  }

  deleteMedicine(id: number) {
    this._medicineSrv.delMedicine(id)
    .subscribe(res => {
      const { msg } = res as any;
      console.warn(msg);
    });
  }

  updateMedicine(obj: Medicine) {
    this._medicineSrv.putMedicine(obj)
    .subscribe(res => {
      const { msg } = res as any;
      console.log(msg);
    });
  }
}
