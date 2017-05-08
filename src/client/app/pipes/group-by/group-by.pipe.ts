import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {
  transform(objects: Array<any>, property: string): any {
    return objects.reduce((previous: any, current: any) => {
      if (previous[current[property]] === undefined) {
        previous[current[property]] = [];
      }
      previous[current[property]].push(current);
      return previous;
    }, {});
  }
}
