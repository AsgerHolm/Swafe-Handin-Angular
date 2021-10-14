import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { CreditCard, Transaction } from '../types';
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
    //var cardNumber = creditCard.card_number;
    //this.http.delete<CreditCard>(`${this.rootUrl}/credit_cards/${creditCard}`)
    return false;
  }

  createCreditCard(card: CreditCard): boolean {
    //this.http.post<CreditCard>(`${this.rootUrl}/transactions`, card)
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

  createTransaction(transaction: Transaction): boolean {
    //this.http.post<Transaction>(`${this.rootUrl}/transactions`, transaction);
    return false;
  }

  deleteTransaction(transaction: Transaction): boolean {
    return false;
  }

  private generateUUID(): string {
    return UUID.UUID()
  }
}


