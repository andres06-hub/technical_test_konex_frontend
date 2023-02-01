import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { TableModule } from 'primeng/table';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TableComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    RouterModule
  ],
  exports: [
    TableComponent,
    CartComponent
  ]
})
export class SharedModule { }
