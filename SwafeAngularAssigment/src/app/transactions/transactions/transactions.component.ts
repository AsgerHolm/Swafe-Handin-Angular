import { Component, OnInit } from '@angular/core';
import { CreditCardService } from '../../credit-card/credit-card.service';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from 'src/app/types';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
