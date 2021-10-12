import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/types';
import { CreditCardService } from '../credit-card.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.css']
})
export class CreditCardDetailsComponent implements OnInit {

  public card: CreditCard | undefined;
  constructor(public creditCardService: CreditCardService,public activatedRoute: ActivatedRoute) {
    
    /*this.card = {
      card_number: 0o12,
      cardholder_name: 'no info',
      csc_code: 0o00,
      expiration_date_month: 0,
      expiration_date_year: 0,
      issuer:'no info'
    };*/

    let index = this.activatedRoute.snapshot.paramMap.get('id');
    if(index) this.creditCardService.getCreditCard(parseInt(index))
    {
      this.card = this.creditCardService.getCreditCard(parseInt(index!));
    }
   }




  ngOnInit(): void {

      
  }

}
