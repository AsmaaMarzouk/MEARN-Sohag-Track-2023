import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDToEGP'
})
export class UsdToegpPipe implements PipeTransform {

  transform(value: number,rate:number=25): number {
    // return value*25;
    return value*rate;
  }

}
