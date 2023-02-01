import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { API_HOST } from 'src/app/common/constants/urls';
import { Sale } from 'src/app/models/data.interface';
import { ApiResponse } from 'src/app/models/genericts.interface';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(
    private _http: HttpClient,
  ) { }

  getSales() {
    return this._http.get<Sale[]>(API_HOST+'sales/').pipe(tap(console.warn));
  }
}
