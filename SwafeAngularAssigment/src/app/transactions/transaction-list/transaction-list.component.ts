import { Component, OnInit, ViewChild } from '@angular/core';
import { CreditCardService } from 'src/app/credit-card/credit-card.service';
import { CreditCard, Transaction } from 'src/app/types';
import { filter, map } from 'rxjs/operators'
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {



  public transArray: Observable<Transaction[]> | null = null;

  constructor(public cardService: CreditCardService) { }

  ngOnInit(): void {
    this.transArray = this.cardService.getTransactions();
  }

  filter(cardNumber: string) {
    this.transArray = of(this.cardService.getFilteredTransactions(cardNumber));
  }

  reset() {
    this.transArray = this.cardService.getTransactions();
  }
  
deleteTransaction(id: string): void {
    console.log(id);
    this.cardService.deleteTransaction(id);
    this.transArray = this.cardService.getTransactions();
  }

}


