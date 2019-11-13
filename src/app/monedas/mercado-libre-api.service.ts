import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MercadoLibreApiService {

  //USD , ARS, CLP

  constructor(private http: HttpClient) { }

  getConversionDolarPeso() :Observable<any>{
      let urlDolarAPeso = 'https:/api.mercadolibre.com/currency_conversions/search?from=USD&to=ARS';
      return this.http.get(urlDolarAPeso);
  }

  getConversionChilenoPeso(): Observable<any>{
      let urlChilenoAPeso = 'https:/api.mercadolibre.com/currency_conversions/search?from=CLP&to=ARS';
      return this.http.get(urlChilenoAPeso);
  }

}
