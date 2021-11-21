import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ExpirationDate'
})
export class ExpirationDatePipe implements PipeTransform {

  transform(month: number, year: number): string {
    return (month.toString() + "/" + year.toString());
  }
}
