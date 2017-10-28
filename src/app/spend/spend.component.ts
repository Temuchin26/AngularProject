import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { CashflowService} from '../_service/cashflow.service';
import { SPEND } from '../SpendMoney';
import { Money } from 'app/money';

@Component({
  selector: 'spend',
  templateUrl: './spend.component.html',
  styleUrls: ['./spend.component.sass'],
  providers: [CashflowService]
})
export class SpendComponent implements OnInit {

  constructor( private cs : CashflowService ) { }

  comentsSpend = ["Купил еду", "Зашел в кафе", "Пополнил счёт", "Заплатил комуналку", "Заплатил за тренировку"]
  
  moneySpend = this.cs.getSpend();
  activeComent;
  select;

  chengeTask(index, i){
    this.select = i;
    this.activeComent = index;
  }

  removeSpend(i){
    this.cs.removeSpend(i);
  }
  
  addComent(com){
    this.comentsSpend.push(com.value);
  }
  
  addSpend(sum){
      let today = Date.now();
      let com = this.activeComent;
      let moneyspend:Money = {
        
        date: today,
        sum: sum.value,
        currency: "$",
        comment: com

      }
      this.cs.addSpend(moneyspend);
  }

  ngOnInit() {
  }

}
