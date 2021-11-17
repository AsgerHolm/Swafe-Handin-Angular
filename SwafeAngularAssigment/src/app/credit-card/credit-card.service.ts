import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
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
   
    
  }


  // Credit Cards
  getCreditCards(): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>(`${this.rootUrl}/credit_cards`);
  }

  getCreditCard(cardNumber: string): CreditCard | undefined {
    return this.cards.find(x => x.card_number.toString() == cardNumber);
  }


  deleteCard(id: string): Observable<unknown>{

    const url = `${this.rootUrl}/credit_cards/${id}`;
    return this.http.delete(url)
    
  }


  createCreditCard(card: CreditCard):Observable<unknown> {

    return this.http.post<CreditCard>(`${this.rootUrl}/credit_cards`, card)
   
  }

   // Transactions
  

  private generateUUID(): string {
    return UUID.UUID()
  }

}


