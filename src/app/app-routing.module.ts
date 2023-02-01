import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'medicines', pathMatch: 'full'},
  { path: 'medicines', loadChildren: () => import('./modules/medication-table/medication-table.module').then(m => m.MedicationTableModule) },
  { path: 'sales', loadChildren: ()=> import('./modules/sales-table/sales-table.module').then(m => m.SalesTableModule) },
  { path: 'not-found', loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
