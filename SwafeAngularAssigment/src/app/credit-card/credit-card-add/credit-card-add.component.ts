import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreditCardService } from '../credit-card.service';
import { CreditCard } from 'src/app/types';

@Component({
  selector: 'app-credit-card-add',
  templateUrl: './credit-card-add.component.html',
  styleUrls: ['./credit-card-add.component.scss']
})
export class CreditCardAddComponent implements OnInit {

  constructor(public creditCardService: CreditCardService) { }

  ngOnInit(): void { }

  onSubmit(form: NgForm) {
    const card: CreditCard = {
      card_number: form.value.card_number,
      csc_code: form.value.csc_code,
      cardholder_name: form.value.cardholder_name,
      expiration_date_year: form.value.expiration_date_year,
      expiration_date_month: form.value.expiration_date_month,
      issuer: form.value.issuer ?? ""
    }
    this.creditCardService.createCreditCard(card);
  }
}
