/* interface CreditCard{
    card_number: string; //7-16 digits, required, only numbers/integers
    csc_code: string; // 3 digits, required, only numbers/integers
    cardholder_name: string; //required
    expiration_date_month: number; // required 1-12
    expiration_date_year: number; // required. 1-99
    issuer: string;
}*/
export interface CreditCard {
    card_number: string
    csc_code: number
    cardholder_name: string
    expiration_date_month: number
    expiration_date_year: number
    uid?: string
    issuer: string
  }


export interface Transaction {
  credit_card: CreditCard;
  amount: number;
  comment: string;
  date: number;
  currency: string;
  uid: string;
}