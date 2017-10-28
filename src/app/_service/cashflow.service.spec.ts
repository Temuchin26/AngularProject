/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CashflowService } from './cashflow.service';

describe('CashflowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CashflowService]
    });
  });

  it('should ...', inject([CashflowService], (service: CashflowService) => {
    expect(service).toBeTruthy();
  }));
});
