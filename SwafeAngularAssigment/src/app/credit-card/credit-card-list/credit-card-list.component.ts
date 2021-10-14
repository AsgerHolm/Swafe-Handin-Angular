import { Component, OnInit } from '@angular/core';
import { CreditCardService } from '../credit-card.service';
import { Observable, of } from 'rxjs';
import { CreditCard } from 'src/app/types';


@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.scss']
})
export class CreditCardListComponent implements OnInit {

  public cardArray: CreditCard[] | undefined;
  constructor(public creditCardService: CreditCardService) { }

  

  ngOnInit(): void {
    this.creditCardService.getCreditCards().subscribe(x => this.cardArray = x);
   
  }

}
