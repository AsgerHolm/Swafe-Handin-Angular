import { Component, OnInit } from '@angular/core';
import { CreditCard, Transaction } from 'src/app/types';
import { CreditCardService } from '../credit-card.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpirationDatePipe } from 'src/app/expiration-date.pipe';
import { TransactionService } from 'src/app/transactions/transaction.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.scss']
})
export class CreditCardDetailsComponent implements OnInit {

  public card: CreditCard | undefined;
  public transArray: Observable<Transaction[]>  | null = null
  public transactions: Transaction[] | undefined;
  constructor(public creditCardService: CreditCardService, public transService: TransactionService, public activatedRoute: ActivatedRoute, public exp_date_pipe: ExpirationDatePipe, private router: Router) {

    let cardNumber = this.activatedRoute.snapshot.paramMap.get('id');
    if (cardNumber) {
      this.card = this.creditCardService.getCreditCard(cardNumber)
      this.transArray = this.transService.getFilteredTrans(cardNumber);
    }
  }

  ngOnInit(): void {}

  delete(card: CreditCard | undefined): void {
    if (!card) return;
    this.creditCardService.deleteCard(card.card_number).subscribe();
    this.router.navigate(['/creditcards']);
  }

}
