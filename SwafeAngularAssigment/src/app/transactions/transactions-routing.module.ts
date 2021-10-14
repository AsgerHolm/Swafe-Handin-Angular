import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [{


  path: '',
  component: TransactionsComponent
},
{
  path: 'addTransaction',
  component: TransactionAddComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
