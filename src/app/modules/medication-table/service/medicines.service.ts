import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Medicine } from 'src/app/models/data.interface';
import { ApiResponse } from 'src/app/models/genericts.interface';
import { API_HOST } from 'src/app/common/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  constructor(
    private _http: HttpClient,
  ) { }

  getAllMedicines() {
    return this._http.get<ApiResponse<Medicine[]>>(API_HOST+'medicines');
  }

  getMedicineFilter() {
    return this._http.get(API_HOST+'medicines/filter');
  }

  //Vender el medicamento con la cantidad
  saleMedical(obj: Medicine, quantity: number) {
    console.warn("SALE ", new Date().getTime());
    return this._http.post(API_HOST+'sale', {
      "publicIdMedicine": obj.publicId,
      "saleDateTime": new Date().getTime(),
      "quantity": quantity
    },
    {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    }
    );
  }
}
