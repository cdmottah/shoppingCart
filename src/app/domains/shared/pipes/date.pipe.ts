import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
@Pipe({
  name: 'globalCurrency',
  standalone: true
})
export class GlobalCurrencyPipe implements PipeTransform {

  transform(value: any): unknown {
    return new CurrencyPipe('en-US').transform(value);
  }

}
