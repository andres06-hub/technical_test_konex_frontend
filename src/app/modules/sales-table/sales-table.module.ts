import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SalesTableComponent } from './sales-table.component';
import { SalesTableRoutingModule } from './sales-table.routing.module';



@NgModule({
  declarations: [
    SalesTableComponent
  ],
  imports: [
    SalesTableRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class SalesTableModule { }
