import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { AddTransaction, CreditCard, Transaction } from '../types';
import { HttpClient } from '@angular/common/http'
import { UUID } from 'angular2-uuid';



@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private rootUrl = 'http://localhost:3000'
  private transactions: Transaction[] = [];
  private cards: CreditCard[] = [];

  constructor(private http: HttpClient) { 
    //this.getTransactions().subscribe(transactions => this.transactions = transactions as Transaction[]);
  }


  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.rootUrl}/transactions`)
      //.pipe(tap(x => x.forEach(y => y.uid = this.generateUUID())));
  }

  getTransaction(uid: string): Transaction | undefined {
    return this.transactions.find(x => x.uid.toString() == uid);
  }

   getFilteredTransactions(cardNumber: string): Transaction[] {
    return this.transactions.filter(x => x.credit_card.card_number.toString() == cardNumber);
  }

  getFilteredTrans(cardNumber: string, ): Observable<Transaction[]>
  {
    return this.http.get<Transaction[]>(`${this.rootUrl}/transactions`).pipe( map( trans => trans.filter( trans => trans.credit_card.card_number.toString() == cardNumber)));
  }



  public createTransaction(transaction: AddTransaction): Observable<unknown> {

   
    const trans: Transaction = {
      credit_card: this.cards.find(x => x.card_number == transaction.card_number)!,
      amount: transaction.amount,
      comment: transaction.comment,
      date: transaction.date,
      currency: transaction.currency,
      uid: this.generateUUID()
    }
    const headers = {'content-type': 'appliation/json'};
    const body = JSON.stringify(trans);
    
    return this.http.post('http://localhost:3000/transactions', trans)//subscribe(data => {console.log(data)  ;this.getTransactions();})
    
  }

  deleteTransaction(id: string): Observable<unknown>
  {
   return this.http.delete(`http://localhost:3000/transactions/${id}`)

  }

  private generateUUID(): string {
    return UUID.UUID()
  }
}
