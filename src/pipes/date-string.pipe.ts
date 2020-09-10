import { Pipe, PipeTransform } from '@angular/core';
import { DateUtils } from '../utils/date-utils';

@Pipe({name: 'dateStringPipe'})
export class DateStringPipe implements PipeTransform {

    transform(value: any): string {
       return DateUtils.getDateName(value);
    }
}