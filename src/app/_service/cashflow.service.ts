import { Injectable } from '@angular/core';

import { MONEY } from '../MONEYbase';
import { Money } from '../money';
import { SPEND } from '../SpendMoney';

@Injectable()
export class CashflowService {

  constructor() { }
  
  g = [];
  s = [];

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

  calcSum(){
      for (var i = 0, Items = MONEY; i < Items.length; i++) {
        var x = Items[i];
        this.g.push(x.sum);
        
      }
      
      var gain = this.g;
      var count:number = 0;

      for (var i = 0; i < gain.length; i++) {
        count = count + parseInt(gain[i]);  
      }
      var res:number = 0;
      res = count
      this.g = [];
      return res;
      
  } 
  calcSpend(){
    for (var i = 0, Items = SPEND; i < Items.length; i++) {
      var x = Items[i];
      this.s.push(x.sum);
      
    }
    
    var spend = this.s;
    var count:number = 0;

    for (var i = 0; i < spend.length; i++) {
      count = count + parseInt(spend[i]);  
    }
    var res:number = 0;
    res = count
    this.s = [];
    
    return res;

} 

}
