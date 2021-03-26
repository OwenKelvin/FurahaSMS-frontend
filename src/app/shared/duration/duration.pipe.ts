import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, _args?: any): any {
    // eslint-disable-next-line max-len
    const iso8601DurationRegex = /(-)?P(?:([.,\d]+)Y)?(?:([.,\d]+)M)?(?:([.,\d]+)W)?(?:([.,\d]+)D)?T(?:([.,\d]+)H)?(?:([.,\d]+)M)?(?:([.,\d]+)S)?/;
    const matches = value.match(iso8601DurationRegex);
    const units = ['sign', 'year', 'month', 'week', 'day', 'hour', 'minute', 'second'];
    return units.map((unit, i) =>
      ([matches[i + 1 ], unit])).map(([match, unit]) =>
      ([match, Number(match) === 1 ? unit : unit + 's'])).filter(([item], i) => item && i > 0).flat().join(' ');
  }

}
