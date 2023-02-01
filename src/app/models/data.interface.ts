export interface Medicine {
  id: number;
  publicId: string;
  name: string;
  factoryLaboratory: string;
  dateManufacture: number;
  expirationDate: number;
  quantityStock: number;
  unitValue: number;
}

export interface Sale {
  id: number;
  publicIdMedicine: string;
  name: string;
  saleDateTime: number;
  quantity: number;
  unitPrice: number;
  totalValue: number;
}
