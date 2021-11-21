import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})

export class TransactionListComponent implements OnInit {

  public transArray: Observable<Array<any>> | null = null;
  constructor(public transService: TransactionService) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  filter(cardNumber: string) {
    console.log("filter: ", cardNumber);
    if (cardNumber === "") {
      return;
    }
    this.transArray = this.transService.getFilteredTrans(cardNumber);
  }

  reset() {
    this.getTransactions();
  }

  deleteTransaction(id: string): void {
    const res = this.transService.deleteTransaction(id).subscribe(() => {
      this.getTransactions();
    });
  }

  private getTransactions() {
    this.transArray = this.transService.getTransactions();
  }
}


