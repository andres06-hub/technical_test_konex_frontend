import { Component, OnInit } from '@angular/core';
import { MedicinesService } from './service/medicines.service';
import { Medicine } from 'src/app/models/data.interface';
import { ApiResponse } from 'src/app/models/genericts.interface';

@Component({
  selector: 'app-medication-table',
  templateUrl: './medication-table.component.html',
  styleUrls: ['./medication-table.component.scss']
})
export class MedicationTableComponent implements OnInit {

  constructor(
    private _medicinesSrv: MedicinesService,
  ) {

  }
  medicines: Medicine[] = [
    {
      id: 454,
      publicId: "jnccdj",
      name: "advil",
      factoryLaboratory: "dsds",
      dateManufacture: 0,
      expirationDate: 0,
      quantityStock: 0,
      unitValue: 0,
    },
    {
      id: 785,
      publicId: "sds",
      name: "pfizer",
      factoryLaboratory: "dwdw",
      dateManufacture: 5,
      expirationDate: 54,
      quantityStock: 48,
      unitValue: 895,
    },
        {
      id: 454,
      publicId: "jnccdj",
      name: "advil",
      factoryLaboratory: "dsds",
      dateManufacture: 0,
      expirationDate: 0,
      quantityStock: 0,
      unitValue: 0,
    },
    {
      id: 785,
      publicId: "sds",
      name: "pfizer",
      factoryLaboratory: "dwdw",
      dateManufacture: 5,
      expirationDate: 54,
      quantityStock: 48,
      unitValue: 895,
    },
    {
      id: 454,
      publicId: "jnccdj",
      name: "advil",
      factoryLaboratory: "dsds",
      dateManufacture: 0,
      expirationDate: 0,
      quantityStock: 0,
      unitValue: 0,
    },
    {
      id: 785,
      publicId: "sds",
      name: "pfizer",
      factoryLaboratory: "dwdw",
      dateManufacture: 5,
      expirationDate: 54,
      quantityStock: 48,
      unitValue: 895,
    },
    {
      id: 454,
      publicId: "jnccdj",
      name: "advil",
      factoryLaboratory: "dsds",
      dateManufacture: 0,
      expirationDate: 0,
      quantityStock: 0,
      unitValue: 0,
    },
    {
      id: 785,
      publicId: "sds",
      name: "pfizer",
      factoryLaboratory: "dwdw",
      dateManufacture: 5,
      expirationDate: 54,
      quantityStock: 48,
      unitValue: 895,
    },
        {
      id: 454,
      publicId: "jnccdj",
      name: "advil",
      factoryLaboratory: "dsds",
      dateManufacture: 0,
      expirationDate: 0,
      quantityStock: 0,
      unitValue: 0,
    },
    {
      id: 785,
      publicId: "sds",
      name: "pfizer",
      factoryLaboratory: "dwdw",
      dateManufacture: 5,
      expirationDate: 54,
      quantityStock: 48,
      unitValue: 895,
    },
        {
      id: 454,
      publicId: "jnccdj",
      name: "advil",
      factoryLaboratory: "dsds",
      dateManufacture: 0,
      expirationDate: 0,
      quantityStock: 0,
      unitValue: 0,
    },
    {
      id: 785,
      publicId: "sds",
      name: "pfizer",
      factoryLaboratory: "dwdw",
      dateManufacture: 5,
      expirationDate: 54,
      quantityStock: 48,
      unitValue: 895,
    }
  ]

  fields: string[] = [
      "Id",
      "Public Id",
      "Name",
      "Factory Laboratory",
      "ManuFacture Date",
      "Expiation Date",
      "Quantity Stock",
      "Unit Value"
    ]

  values: string[] = [
      "id",
      "publicId",
      "name",
      "factoryLaboratory",
      "dateManufacture",
      "expirationDate",
      "quantityStock",
      "unitValue",
    ]



  ngOnInit(): void {
    // this._medicinesSrv.getAllMedicines().subscribe({
    //   next: (data: ApiResponse<Medicine[]>) => this.medicines = data.data,
    //   error: (err) => console.error(err.error.message),
    // });
  }
}
