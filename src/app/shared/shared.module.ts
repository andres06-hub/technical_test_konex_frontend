import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { TableModule } from 'primeng/table';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MedicineTableService } from '../common/services/medicine-table.service';

@NgModule({
  declarations: [
    TableComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
  ],
  exports: [
    TableComponent,
    CartComponent
  ],
  providers: [
    MedicineTableService
  ]
})
export class SharedModule { }
