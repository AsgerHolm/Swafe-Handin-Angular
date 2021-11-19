import { Component, OnInit, ViewChild } from '@angular/core';
import { CreditCardService } from 'src/app/credit-card/credit-card.service';
import { TransactionService } from '../transaction.service';
import { CreditCard, Transaction } from 'src/app/types';
import { filter, map } from 'rxjs/operators'
import { Observable, of } from 'rxjs';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {



  //public transArray: Transaction[] | null = null;

  public transArray: Observable<Array<any>>  | null = null;
  constructor(public transService: TransactionService) { }

  ngOnInit(): void {
   this.transArray = this.transService.getTransactions();
  }

  filter(cardNumber: string) {
   
   this.transArray = this.transService.getFilteredTrans(cardNumber);
  }


  reset() {
    this.transArray = this.transService.getTransactions();
  }
  
deleteTransaction(id: string): void {
    console.log(id);
    this.transService.deleteTransaction(id).subscribe();
    
  }

}


