import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

import { CashflowService} from '../_service/cashflow.service';
import { MONEY } from '../MONEYbase'
import { Money } from 'app/money';

@Component({
  selector: 'gain',
  templateUrl: './gain.component.html',
  styleUrls: ['./gain.component.sass'],
  providers: [CashflowService]
})
export class GainComponent implements OnInit {

  @Input() activeForm;
  @Output() changingForm = new EventEmitter();

  constructor( private cs : CashflowService ) { }

  ngOnInit() {
  }

  comentsGain = ["Сдал проект", "Сэкономил на еде)", "Зарплата", "Премия", "Нашел"]

  moneyGain = this.cs.getGain();
  activeComent;
  select;

  chengeTask(index, i){
    this.select = i;
    this.activeComent = index;
  }

  removeGain(i){
    this.cs.removeGain(i);
  }
  
  chengeForm(newForm){
    
    this.activeForm = newForm;
    this.changingForm.emit(this.activeForm);
    console.log(newForm);
    
  }

  addComentGain(com){
    this.comentsGain.push(com.value);
  }
  
  addGain(sum){
      let today = Date.now();
      let com = this.activeComent;
      let moneygain:Money = {
        
        date: today ,
        sum: sum.value,
        currency: "$",
        comment: com

      }
      this.cs.addGain(moneygain);
  }
}
