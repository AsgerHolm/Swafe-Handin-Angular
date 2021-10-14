import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';


@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionListComponent,
    TransactionAddComponent,
    
    
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    FormsModule
  ]
})
export class TransactionsModule { }
