import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appOnlyInts]',
  providers: [{ provide: NG_VALIDATORS, useExisting: OnlyIntsDirective, multi: true }]
})
export class OnlyIntsDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return !isNaN(+control.value) ? null : { only_ints: 'Card number must only contain numbers' };  //REF: https://stackoverflow.com/questions/23437476/in-typescript-how-to-check-if-a-string-is-numeric
  }
}
