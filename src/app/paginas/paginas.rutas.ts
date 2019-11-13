import { Routes, RouterModule } from "@angular/router";
import { MonedasComponent} from '../monedas/monedas.component';
import {IndexComponent} from '../index/index.component';

const rutas: Routes = [
    {path: '', redirectTo: '/index', pathMatch: "full"},
    {path: 'index', component: IndexComponent},
    {path: 'monedas', component: MonedasComponent}
]

export const RUTAS = RouterModule.forChild(rutas);
