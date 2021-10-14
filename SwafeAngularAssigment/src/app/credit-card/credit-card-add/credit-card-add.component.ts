import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreditCardService } from '../credit-card.service';

@Component({
  selector: 'app-credit-card-add',
  templateUrl: './credit-card-add.component.html',
  styleUrls: ['./credit-card-add.component.scss']
})
export class CreditCardAddComponent implements OnInit {

  constructor(public creditCardService: CreditCardService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm)
  {
    this.creditCardService.createCreditCard(form.value);
  }
}
