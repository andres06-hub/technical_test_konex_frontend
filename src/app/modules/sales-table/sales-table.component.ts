import { Component, OnInit } from '@angular/core';
import { SaleService } from './service/sale.service';
import { Sale } from 'src/app/models/data.interface';

@Component({
  selector: 'app-sales-table',
  templateUrl: './sales-table.component.html',
  styleUrls: ['./sales-table.component.scss']
})
export class SalesTableComponent implements OnInit {

  constructor(
    private _saleSrv: SaleService,
    ) {

  }

  sales: Sale[] = [
    {
      id: 0,
      publicIdMedicine: "sassdsd",
      name: "dsdsdsd",
      saleDateTime: 0,
      quantity: 0,
      unitPrice: 0,
      totalValue: 0,
    },
    {
      id: 0,
      publicIdMedicine: "sassdsd",
      name: "dsdsdsd",
      saleDateTime: 0,
      quantity: 0,
      unitPrice: 0,
      totalValue: 0,
    },
    {
      id: 0,
      publicIdMedicine: "sassdsd",
      name: "dsdsdsd",
      saleDateTime: 0,
      quantity: 0,
      unitPrice: 0,
      totalValue: 0,
    },
    {
      id: 0,
      publicIdMedicine: "sassdsd",
      name: "dsdsdsd",
      saleDateTime: 0,
      quantity: 0,
      unitPrice: 0,
      totalValue: 0,
    },
    {
      id: 0,
      publicIdMedicine: "sassdsd",
      name: "dsdsdsd",
      saleDateTime: 0,
      quantity: 0,
      unitPrice: 0,
      totalValue: 0,
    },
    {
      id: 0,
      publicIdMedicine: "sassdsd",
      name: "dsdsdsd",
      saleDateTime: 0,
      quantity: 0,
      unitPrice: 0,
      totalValue: 0,
    }
  ];

  fields: string[] = [
      "id",
      "publicIdMedicine",
      "name",
      "saleDateTime",
      "quantity",
      "unitPrice",
      "totalValue",
  ]

  values: string[] = [
      "id",
      "publicIdMedicine",
      "name",
      "saleDateTime",
      "quantity",
      "unitPrice",
      "totalValue",
  ]

  ngOnInit(): void {
    // this._saleSrv.getSales();
  }
}
