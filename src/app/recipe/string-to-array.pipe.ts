import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToArray'
})
export class StringToArrayPipe implements PipeTransform {

  transform(value: string): String[] {
      return value !== null ? value.split('\\n') : ['none'];
  }

}
