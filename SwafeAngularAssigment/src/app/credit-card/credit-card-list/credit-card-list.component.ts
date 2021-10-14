import { Component, OnInit } from '@angular/core';
import { CreditCardService } from '../credit-card.service';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/types';


@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.scss']
})
export class CreditCardListComponent implements OnInit {

  cards: Observable<CreditCard[]> | null = null;

  constructor(public creditCardService: CreditCardService) { }

  ngOnInit(): void {
    this.cards = this.creditCardService.getCreditCards();
  }

}
