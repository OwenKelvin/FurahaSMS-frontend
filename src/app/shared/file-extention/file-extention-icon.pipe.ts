import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileExtentionIcon'
})
export class FileExtentionIconPipe implements PipeTransform {

  transform(value: string, ..._args: unknown[]): string {
    switch (value.toLowerCase()) {
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
      case 'tiff':
      case 'bmp':
      case 'wmf':
      case 'webp':
      case 'gif':
        return 'icon-file-image';
      case 'txt':
        return 'icon-doc-text-inv';
      case 'mp3':
      case 'aac':
      case '3gp':
      case 'aa':
      case 'act':
      case 'aiff':
      case 'alac':
      case 'amr':
      case 'ape':
        return 'icon-file-audio';
      case 'mp4':
      case 'webm':
      case 'mpg':
      case 'mpeg':
      case 'mpe':
      case 'ogg':
      case 'm4p':
      case 'm4v':
      case 'avi':
      case 'wmv':
      case 'mov':
      case 'flv':
      case 'swf':
        return 'icon-file-video';
      case 'csv':
        return 'icon-database';
      default:
        return 'icon-doc';

    }
  }

}
