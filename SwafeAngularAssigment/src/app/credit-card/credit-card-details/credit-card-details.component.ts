import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/types';
import { CreditCardService } from '../credit-card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.scss']
})
export class CreditCardDetailsComponent implements OnInit {

  public card: CreditCard | undefined;
  constructor(public creditCardService: CreditCardService, public activatedRoute: ActivatedRoute) {

    let cardNumber = this.activatedRoute.snapshot.paramMap.get('id');
    if (cardNumber) {
      this.card = this.creditCardService.getCreditCard(cardNumber)
    }
  }

  ngOnInit(): void {

  }

}
