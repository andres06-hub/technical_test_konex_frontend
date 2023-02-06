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
      id: 5,
      publicId: "485sd1",
      name: "acetaminofen",
      factoryLaboratory: "bayer",
      dateManufacture: 16604587015,
      expirationDate: 16054178125,
      quantityStock: 45,
      unitValue: 44.4
    },
    {
      id: 7,
      publicId: "sd5471d",
      name: "acetaminofen",
      factoryLaboratory: "invima",
      dateManufacture: 16604587015,
      expirationDate: 16054178125,
      quantityStock: 20,
      unitValue: 74.1
    }
  ]

  fields: string[] = [
      // "Id",
      "Public Id",
      "Name",
      "Factory Laboratory",
      "ManuFacture Date",
      "Expiation Date",
      "Quantity Stock",
      "Unit Value"
    ]

  values: string[] = [
      // "id",
      "publicId",
      "name",
      "factoryLaboratory",
      "dateManufacture",
      "expirationDate",
      "quantityStock",
      "unitValue",
    ]

  ngOnInit(): void {
    this._medicinesSrv.getAllMedicines().subscribe({
      next: (data: ApiResponse<Medicine[]>) => this.medicines = data.data,
      error: (err) => console.error(err.error.message),
    });
  }
}
