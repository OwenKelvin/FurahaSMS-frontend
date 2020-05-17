import { Pipe, PipeTransform } from '@angular/core';
import { fileExtentionData } from './file-extention.data';

@Pipe({
  name: 'fileExtention'
})
export class FileExtentionPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const data = fileExtentionData.find(item => item.fileTypes.includes(value.toLowerCase()));
    if (args[0] === 'color') {
      return data ? data.color : '#ffffff';
    }
    return data ? data.icon : 'icon-doc';
  }

}
