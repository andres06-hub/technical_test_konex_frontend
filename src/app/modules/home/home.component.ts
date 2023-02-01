import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  srcMedicines = '../../../assets/img/medicine.svg';
  srcSales = '../../../assets/img/sale.svg'
  titleM = 'Medicines';
  titleS = 'Sales';
  messageM = 'See available medicines!';
  messageS = 'See sales!';
}
