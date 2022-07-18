import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'typePipe'})
export class TypePipe implements PipeTransform {
  transform(value: string): string {
    if(value === "elado") return "Eladó";
    else return "Kiadó";
  }
}
