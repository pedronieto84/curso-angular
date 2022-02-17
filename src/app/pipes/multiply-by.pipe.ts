import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplyBy'
})
export class MultiplyByPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
