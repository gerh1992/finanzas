import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MonedasComponent } from './monedas/monedas.component';
import { RUTAS } from './paginas/paginas.rutas';
import { IndexComponent } from './index/index.component';
import {MercadoLibreApiService} from './monedas/mercado-libre-api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    MonedasComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RUTAS

  ],
  providers: [MercadoLibreApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
