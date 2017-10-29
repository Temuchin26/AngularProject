import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Money } from '../money';
import { SPEND } from '../SpendMoney';


@Component({
  selector: 'general-area',
  templateUrl: './general-area.component.html',
  styleUrls: ['./general-area.component.sass']
})
export class GeneralAreaComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }

  action = 'Gain';

  

}
