import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { AddTransaction, CreditCard, Transaction } from '../types';
import { HttpClient } from '@angular/common/http'
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  private rootUrl = 'http://localhost:3000'
  private cards: CreditCard[] = [];
  private transactions: Transaction[] = [];
  

  constructor(private http: HttpClient) {
    this.getCreditCards().subscribe(cards => this.cards = cards as CreditCard[])
    this.getTransactions().subscribe(transactions => this.transactions = transactions as Transaction[])
    
  }


  // Credit Cards
  getCreditCards(): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>(`${this.rootUrl}/credit_cards`);
  }

  getCreditCard(cardNumber: string): CreditCard | undefined {
    return this.cards.find(x => x.card_number.toString() == cardNumber);
  }

  deleteCreditCard(creditCard: CreditCard): boolean {
    var cardNumber = creditCard.card_number;
    this.http.delete<CreditCard>(`${this.rootUrl}/credit_cards/${cardNumber}`)
    return false;
  }


  createCreditCard(card: CreditCard): boolean {
   this.http.post<CreditCard>(`$http://localhost:3000/transactions`, card)
    return false;

  }


   // Transactions
   getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.rootUrl}/transactions`)
      .pipe(tap(x => x.forEach(y => y.uid = this.generateUUID())));
  }

  getTransaction(uid: string): Transaction | undefined {
    return this.transactions.find(x => x.uid.toString() == uid);
  }

   getFilteredTransactions(cardNumber: string): Transaction[] {
    return this.transactions.filter(x => x.credit_card.card_number.toString() == cardNumber);
  }

  public createTransaction(transaction: AddTransaction): void {

   
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
    
     this.http.post('http://localhost:3000/transactions', trans).subscribe(data => {console.log(data)  ;this.getTransactions();})
    
  }



  deleteTransaction(id: string): void
  {
   this.http.delete<Transaction>(`http://localhost:3000/transactions/${id}`).subscribe(data => {console.log(data) ;  this.getTransactions();})

   
  }



  private generateUUID(): string {
    return UUID.UUID()
  }

}


