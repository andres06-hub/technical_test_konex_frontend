import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Medicine } from 'src/app/models/data.interface';
import { API_HOST } from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class MedicineTableService {

  constructor(
    private _http: HttpClient,
  ) { }

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
