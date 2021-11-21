import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddTransaction } from 'src/app/types';
import { TransactionService } from 'src/app/transactions/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.scss'],

})
export class TransactionAddComponent implements OnInit {

  constructor(public transService: TransactionService, private router: Router) { }

  ngOnInit(): void { }

  onSubmit(form: NgForm) {
    const trans: AddTransaction = {
      card_number: form.value.card_number,
      amount: form.value.amount,
      comment: form.value.comment,
      date: form.value.date,
      currency: form.value.currency,
      uid: form.value.uid ?? ""
    }
    this.transService.createTransaction(trans).subscribe();
    this.router.navigate(['/transactions']);
  }
}
