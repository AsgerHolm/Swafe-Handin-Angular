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
  constructor(private http: HttpClient) { }
  


  getCreditCards(): Observable<CreditCard[]>{
    
   return this.http.get<CreditCard[]>('http://localhost:3000/credit_cards');
     

    //return of(this.cards);
    
  }
  
  getCreditCard(index: number): CreditCard{
    this.http.get<CreditCard[]>('http://localhost:3000/credit_cards').subscribe(x => this.cardArray = x);
    return(this.cardArray![index]);
  }

  createCreditCard( card: CreditCard): boolean
  {

    return false;
  }

  /*getTransactions(): Observable<Transaction[]>
  {
    return of(this.trans);
  }*/

  createTransaction(transaction: Transaction): boolean
  {

    return false;
  }

  deleteCreditCard(creditCard: CreditCard): boolean
  {
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

