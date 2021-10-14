import { Component, OnInit, ViewChild } from '@angular/core';
import { CreditCardService } from 'src/app/credit-card/credit-card.service';
import { CreditCard, Transaction } from 'src/app/types';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators'




@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

 
  //trans$: Observable<Transaction>;
   transArray$: Observable<Transaction[]> ;
  public testArray!: Transaction[];
  public cardNumber: number | undefined ;

 
  constructor(public cardService: CreditCardService) {
    
    this.transArray$ = this.cardService.getTransactions();

   }


  filterTrans(input: CreditCard): void
  {
    //this.cardService.getTransactions().pipe(map(items => items.filter( item => item.credit_card == input))).subscribe(x => this.$transArray = x);
    //window.location.reload()
  //this.transArray$.pipe(map(items => items.filter( item => item.credit_card.card_number == input)));
   console.log(input);
  }
  

  ngOnInit(): void {
    
    this.transArray$.subscribe(v => {console.log(v)});
  
    //this.transArray$ = this.cardService.getTransactions()//.subscribe(x => this.$transArray = x);//.pipe(map(items => items.filter( item => item.credit_card.card_number == 42639882640269299)));
  }

  deleteTransaction(id: string): void {
    console.log(id);
    this.cardService.deleteTransaction(id);
  }

  

}


