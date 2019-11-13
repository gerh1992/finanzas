import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { MercadoLibreApiService } from './mercado-libre-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.css']
})
export class MonedasComponent implements OnInit {

  valorDolar = 0.0;
  valorChileno = 0.0;
  cambioDolar = 0.0;
  cambioChileno = 0.0;
  cambioArgentino1: number = 1;
  cambioArgentino2: number = 1;

  constructor(private mercadoLibreApi : MercadoLibreApiService
  ,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.mercadoLibreApi.getConversionDolarPeso().subscribe(
          moneda => {
              this.valorDolar = moneda.ratio;
              this.cambioDolar = moneda.ratio;
          }
      );
      this.mercadoLibreApi.getConversionChilenoPeso().subscribe(
          moneda => {
              this.valorChileno = moneda.ratio;
              this.cambioChileno = moneda.ratio;
          }
      );


  }

  onChanges1(cambio: any){
      this.cambioDolar = cambio.target.value * this.valorDolar;
  }
  onChanges2(cambio: any){
       this.cambioChileno = cambio.target.value * this.valorChileno;
  }


}
