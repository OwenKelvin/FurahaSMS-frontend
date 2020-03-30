import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number2Alphabet'
})
export class Number2AlphabetPipe implements PipeTransform {

  transform(value: any, ..._args: any[]): any {
    return String.fromCharCode(value + 65);
  }

}
