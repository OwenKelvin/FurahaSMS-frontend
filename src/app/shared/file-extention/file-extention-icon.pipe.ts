import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileExtentionIcon'
})
export class FileExtentionIconPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'pdf':
        return 'icon-file-pdf';
      case 'pptx':
        return 'icon-file-powerpoint';
      case 'xls':
      case 'xlsm':
      case 'xlsx':
        return 'icon-file-excel';
      case 'doc':
      case 'docx':
        return 'icon-file-word';
      case 'jpg':
      case 'jpeg':
      case 'png':
        return 'icon-picture';
      case 'txt':
        return 'icon-doc-text-inv';
      default:
        return 'icon-doc';

    }
  }

}
