import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicationTableComponent } from './medication-table.component';
import { MedicationTableRoutingModule } from './medication-table.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MedicationTableComponent
  ],
  imports: [
    CommonModule,
    MedicationTableRoutingModule,
    SharedModule
  ]
})
export class MedicationTableModule { }
