import { Injectable } from '@angular/core';

import { MONEY } from '../MONEYbase';
import { Money } from '../money';
import { SPEND } from '../SpendMoney';

@Injectable()
export class CashflowService {

  constructor() { }

  getGain(){
    return MONEY;
  }
  getSpend(){
    return SPEND;
  }

  addGain(money : Money){
    MONEY.push(money);
  }
  addSpend(money : Money){
    SPEND.push(money);
  }
  
  removeGain(i){
    MONEY.splice(i, 1)
  }
  removeSpend(i){
    SPEND.splice(i, 1)
  }

  calcSum(arr){

    var resarr = [];
      for (var i = 0, Items = arr; i < Items.length; i++) {
        var x = Items[i];
        resarr.push(x.sum);
        
      }
      
      var calcarr = resarr;
      var count:number = 0;

      for (var i = 0; i < calcarr.length; i++) {
        count = count + parseInt(calcarr[i]);  
      }

      return count;
      
  } 

}
