import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Transaction } from 'src/app/types';
import { CreditCardService } from 'src/app/credit-card/credit-card.service';


@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.scss'],
  
})
export class TransactionAddComponent implements OnInit {

  constructor(public creditCardService: CreditCardService) { 
    
  }



  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const trans: Transaction = {
      credit_card: form.value.credit_card ??"",
      amount: form.value.amount,
      comment: form.value.comment,
      date: form.value.date,
      currency: form.value.currency,
      uid: form.value.uid ?? ""
    }
    console.log(trans + form.value.credit_card);
    this.creditCardService.createTransaction(trans, form.value.credit_card);
  }
}
