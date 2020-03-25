import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileExtentionColor'
})
export class FileExtentionColorPipe implements PipeTransform {

  transform(value: string, ..._args: unknown[]): string {
    switch (value) {
      case 'pdf':
        return '#fa8072';
      case 'pptx':
        return '#ee946a';
      case 'xls':
      case 'xlsm':
      case 'xlsx':
        return '#00ff7f';
      case 'doc':
      case 'docx':
        return '#8ac4f3';
      case 'jpg':
      case 'jpeg':
      case 'png':
        return '#cbf38a'
      case 'txt':
        return 'ffffff';
      default:
        return '#ffffff';
    }
  }
}
