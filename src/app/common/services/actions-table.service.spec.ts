import { TestBed } from '@angular/core/testing';

import { MedicineTableService } from './medicine-table.service';

describe('ActionsTableService', () => {
  let service: MedicineTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicineTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
