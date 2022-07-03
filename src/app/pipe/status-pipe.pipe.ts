import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPipe'
})
export class StatusPipePipe implements PipeTransform {

  transform(isDeleted: boolean): unknown {
    return isDeleted ? "Deactive": "Active";
  }

}
