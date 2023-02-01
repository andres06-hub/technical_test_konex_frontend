import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_HOST } from 'src/app/common/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(
    private _http: HttpClient,
  ) { }

  getSales() {
    return this._http.get<any[]>(API_HOST+'/sales')
  }
}
