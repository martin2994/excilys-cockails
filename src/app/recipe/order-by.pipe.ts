import { Pipe, PipeTransform } from '@angular/core';
import {Recipe} from './recipe.model';
import {isNullOrUndefined} from 'util';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Recipe[], order: boolean): Recipe[] {
    return value.sort((a, b) => {
      if (!isNullOrUndefined(a.name) && !isNullOrUndefined(b.name)) {
        return (order) ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      }
    });
  }

}
