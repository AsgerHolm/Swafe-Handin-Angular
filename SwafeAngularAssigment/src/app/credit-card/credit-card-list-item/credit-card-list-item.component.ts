import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/types';
import { CreditCardService } from '../credit-card.service';

@Component({
  selector: 'app-credit-card-list-item',
  templateUrl: './credit-card-list-item.component.html',
  styleUrls: ['./credit-card-list-item.component.scss']
})
export class CreditCardListItemComponent implements OnInit {

  

  constructor( public creditCardService: CreditCardService) { 

    
  }

  ngOnInit(): void {

    
  }

}
