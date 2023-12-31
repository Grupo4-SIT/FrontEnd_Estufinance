import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PresupuestoComponent } from './pages/presupuesto.component';
import { MetricasComponent } from './components/metricas/metricas.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { FormPresupuestoComponent } from './components/crear-presupuesto/form-presupuesto/form-presupuesto.component';

const routes: Routes = [
  {
    path: '', component: PresupuestoComponent, children: [
      {
        path: 'metricas', component: MetricasComponent
      },
      {
        path: 'detalles/:idPresupuesto', component: DetallesComponent
      },
      {
        path: 'crear-presupuesto', component: FormPresupuestoComponent
      },
      {
        path: '', redirectTo: 'metricas', pathMatch: 'full'
      }
    ],
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresupuestoRoutingModule { }