import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Medicine } from 'src/app/models/data.interface';
import { ApiResponse } from 'src/app/models/genericts.interface';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  URL = 'http://localhost:5000/api/v01/';

  constructor(
    private _http: HttpClient,
  ) { }

  getAllMedicines() {
    return this._http.get<ApiResponse<Medicine[]>>(this.URL+'medicines');
  }

  getMedicineFilter() {
    return this._http.get(this.URL+'medicines/filter')
  }
}
