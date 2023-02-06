import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { TableModule } from 'primeng/table';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MedicineTableService } from '../common/services/medicine-table.service';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    ConfirmPopupModule,
  ],
  exports: [
    TableComponent,
    CartComponent
  ],
  providers: [
    MedicineTableService,
    ConfirmationService,
  ]
})
export class SharedModule { }
