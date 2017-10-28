import { Component, OnInit } from '@angular/core';
import { MONEY } from '../MONEYbase'
import { CashflowService} from '../_service/cashflow.service';
import { GeneralAreaComponent } from 'app/general-area/general-area.component';

@Component({
  selector: 'conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.sass'],
  providers: [CashflowService]
})
export class ConclusionComponent implements OnInit {

  constructor(private cs: CashflowService , private ga: GeneralAreaComponent) { }

  ngOnInit( ) {
    
    

    }
  ngDoCheck(){
    this.calcsum = this.cs.calcSum();
    this.calcspend = this.cs.calcSpend();
    this.res = this.calcsum - this.calcspend;
    if (this.res < 0 ) {
      this.abuse = 1;
    }
    else{
      this.abuse = 0;
    }
    console.log(this.res);
    
  }

  abuse;
  calcspend;
  calcsum;
  res:number = 0;
  
  state = false;

  moneygain = this.cs.getGain();
  moneyspend = this.cs.getSpend();
  
  Active(state){
    this.state = !this.state;
    
  }

}
