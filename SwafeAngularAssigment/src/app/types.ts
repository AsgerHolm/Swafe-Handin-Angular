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

export interface AddTransaction {
  card_number: string;
  amount: number;
  comment: string;
  date: number;
  currency: string;
  uid: string;
}