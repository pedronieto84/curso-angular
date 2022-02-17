import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplyBy'
})
export class MultiplyByPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): number {
    const number = value as number
    const multiplier = args[0] as number
    console.log(number, multiplier);
    const res = number * multiplier
    
    return res
  }

}
