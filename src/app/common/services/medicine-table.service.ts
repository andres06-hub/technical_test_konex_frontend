import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Medicine } from 'src/app/models/data.interface';
import { API_HOST } from '../constants/urls';
import { ApiResponse } from 'src/app/models/genericts.interface';

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

  delMedicine(id: number) {
    console.warn(id);
    return this._http.delete(API_HOST+'medicine/'+id);
  }

  putMedicine(obj: Medicine) {
    return this._http.put(API_HOST+'sale'+obj.id,{
      "data": obj
    },
    {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    }
    );
  }

}
