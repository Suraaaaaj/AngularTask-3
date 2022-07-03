import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullNamePipe'
})
export class FullNamePipePipe implements PipeTransform {

  transform(firstName: string, secondName: string): unknown {
    return firstName + " " + secondName;
  }

}
