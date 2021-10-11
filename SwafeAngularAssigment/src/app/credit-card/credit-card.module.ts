import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreditCardRoutingModule } from './credit-card-routing.module';
import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';
import { CreditCardListItemComponent } from './credit-card-list-item/credit-card-list-item.component';
import { CreditCardAddComponent } from './credit-card-add/credit-card-add.component';
import { CreditCardDetailsComponent } from './credit-card-details/credit-card-details.component';


@NgModule({
  declarations: [
    CreditCardListComponent,
    CreditCardListItemComponent,
    CreditCardAddComponent,
    CreditCardDetailsComponent
  ],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    FormsModule
  ]
})
export class CreditCardModule { }
