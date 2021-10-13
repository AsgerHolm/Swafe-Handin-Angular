import { Component, OnInit } from '@angular/core';
import { CreditCardService } from 'src/app/credit-card/credit-card.service';
import { Transaction } from 'src/app/types';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {


  public transArray: Transaction[] | undefined;
  public filteredTransArray: Transaction[] | undefined;
  constructor(public cardService: CreditCardService) { }

  ngOnInit(): void {

    this.cardService.getTransactions();
  }

}
