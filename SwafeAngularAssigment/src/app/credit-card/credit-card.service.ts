import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CreditCard, Transaction } from '../types';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  rootUrl = 'http://localhost:3000'
  public cardArray: CreditCard[] | undefined;
  public transArray: Transaction[] | undefined;

  constructor(private http: HttpClient) { }
  


  getCreditCards(): Observable<CreditCard[]>{
    
   return this.http.get<CreditCard[]>('http://localhost:3000/credit_cards');
     
  }
  
  getCreditCard(index: number): CreditCard{
    this.http.get<CreditCard[]>('http://localhost:3000/credit_cards').subscribe(x => this.cardArray = x);
    return(this.cardArray![index]);
  }

  createCreditCard( card: CreditCard): boolean
  {
    this.http.post<CreditCard>('http://localhost:3000/transactions',card)
    return false;
  }

  getFilteredTransactions(cardNumber: number): Transaction[]
  {
    
    return this.transArray!
      .filter(trans => trans.credit_card.card_number == cardNumber);

  }
  getTransactions(): Transaction[]
  {
    this.http.get<Transaction[]>('http://localhost:3000/transactions').subscribe(x => this.transArray = x);
    return this.transArray!;
  }



  createTransaction(transaction: Transaction): boolean
  {
      this.http.post<Transaction>('http://localhost:3000/transactions',transaction);
    return false;
  }

  deleteCreditCard(creditCard: CreditCard): boolean
  {
    var cardNumber = creditCard.card_number;
    this.http.delete<CreditCard>('$http://localhost:3000/credit_cards/{this.cardNumber}')
    return false;
  }
  deleteTransaction(transaction: Transaction): boolean
  {
    return false;
  }

  



  cards: CreditCard[] =[
    {
      card_number : 43215678,
      cardholder_name : 'Asger',
      csc_code : 123,
      expiration_date_month : 12,
      expiration_date_year : 42,
      issuer : 'Danskebank'
    },
    {
      card_number : 43278678,
      cardholder_name : 'Assder',
      csc_code : 883,
      expiration_date_month : 2,
      expiration_date_year : 78,
      issuer : 'ChinaBankeruh'
    }
  ]


  /*trans: Transaction[] = 
  [
    {
        credit_card: this.cards[0],
        amount : 456878,
        currency: 'DKK',
        date: new Date(1, 12, 1994),
        
    },
    {
      credit_card: this.cards[1],
      amount : 40078,
      currency: 'Yen',
      date: new Date(8, 8, 2015),
      
    }
  ]
*/
}


