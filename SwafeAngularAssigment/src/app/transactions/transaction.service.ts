import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddTransaction, CreditCard, Transaction } from '../types';
import { HttpClient } from '@angular/common/http'
import { UUID } from 'angular2-uuid';
import { CreditCardService } from '../credit-card/credit-card.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private rootUrl = 'http://localhost:3000'
  private transactions: Transaction[] = [];
  private cards: CreditCard[] = [];

  constructor(private http: HttpClient, public cardService: CreditCardService) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.rootUrl}/transactions`)
  }

  getTransaction(uid: string): Transaction | undefined {
    return this.transactions.find(x => x.uid.toString() == uid);
  }

  getFilteredTransactions(cardNumber: string): Transaction[] {
    return this.transactions.filter(x => x.credit_card.card_number.toString() == cardNumber);
  }

  getFilteredTrans(cardNumber: string,): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.rootUrl}/transactions`).pipe(map(transList => transList.filter(trans => trans.credit_card?.card_number.toString() == cardNumber)));
  }

  public createTransaction(transaction: AddTransaction): Observable<unknown> {
    const card = this.cardService.getCreditCard(transaction.card_number);
    const trans: Transaction = {
      credit_card: card ?? this.cards.find(x => x.card_number == transaction.card_number)!,
      amount: transaction.amount,
      comment: transaction.comment,
      date: transaction.date,
      currency: transaction.currency,
      uid: this.generateUUID()
    }
    const headers = { 'content-type': 'appliation/json' };
    const body = JSON.stringify(trans);
    return this.http.post(`${this.rootUrl}/transactions`, trans);
  }

  deleteTransaction(id: string): Observable<unknown> {
    return this.http.delete(`${this.rootUrl}/transactions/${id}`)
  }

  private generateUUID(): string {
    return UUID.UUID()
  }
}
