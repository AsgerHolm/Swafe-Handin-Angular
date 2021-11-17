import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AddTransaction, Transaction } from 'src/app/types';
import { TransactionService } from 'src/app/transactions/transaction.service';


@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.scss'],
  
})
export class TransactionAddComponent implements OnInit {

  constructor(public transService: TransactionService) { 
    
  }



  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const trans: AddTransaction  = {
      card_number: form.value.card_number ,
      amount: form.value.amount,
      comment: form.value.comment,
      date: form.value.date,
      currency: form.value.currency,
      uid: form.value.uid ?? ""
    }
    console.log(trans);
    this.transService.createTransaction(trans).subscribe();
  }
}
