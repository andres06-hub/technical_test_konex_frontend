import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicationTableComponent } from './medication-table.component';

const routes: Routes = [{path: '', component: MedicationTableComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicationTableRoutingModule { }
