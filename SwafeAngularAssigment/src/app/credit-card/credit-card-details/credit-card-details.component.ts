import { Component, OnInit } from '@angular/core';
import { CreditCard, Transaction } from 'src/app/types';
import { CreditCardService } from '../credit-card.service';
import { ActivatedRoute } from '@angular/router';
import { ExpirationDatePipe } from 'src/app/expiration-date.pipe';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.scss']
})
export class CreditCardDetailsComponent implements OnInit {

  public card: CreditCard | undefined;
  public transactions: Transaction[] | undefined;
  constructor(public creditCardService: CreditCardService, public activatedRoute: ActivatedRoute, public exp_date_pipe: ExpirationDatePipe) {

    let cardNumber = this.activatedRoute.snapshot.paramMap.get('id');
    if (cardNumber) {
      this.card = this.creditCardService.getCreditCard(cardNumber)
      this.transactions = this.creditCardService.getFilteredTransactions(cardNumber);
    }
  }

  ngOnInit(): void {

  }

  delete(card: CreditCard | undefined): void {
    if (!card) return;
    this.creditCardService.deleteCreditCard(card);
  }

}
