import { Component, OnInit, ViewChild } from '@angular/core';
import { CreditCardService } from 'src/app/credit-card/credit-card.service';
import { Transaction } from 'src/app/types';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

 

  public transArray: Transaction[] | undefined;
  public filteredTransArray: Transaction[] | undefined;
  public cardNumber: number | undefined ;
  constructor(public cardService: CreditCardService) { }

  ngOnInit(): void {

    this.transArray = this.cardService.getTransactions();
  }

  getFilteredTransactions(cardNumber: number): void
  {
    
  } 

}


