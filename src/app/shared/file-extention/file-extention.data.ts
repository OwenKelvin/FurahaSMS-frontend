
interface IFileExtentionColor {
  fileTypes: string[];
  icon: string;
  color: string;
}
export const fileExtentionData: IFileExtentionColor[] = [
  { fileTypes: ['pdf'], icon: 'icon-file-pdf', color: '#fa8072' },
  { fileTypes: ['pptx'], icon: 'icon-file-powerpoint', color: '#ee946a' },
  { fileTypes: ['xls', 'xlsm', 'xlsx'], icon: 'icon-file-excel', color: '#00ff7f' },
  { fileTypes: ['doc', 'docx'], icon: 'icon-file-word', color: '#8ac4f3' },
  { fileTypes: ['jpg', 'jpeg', 'png', 'tiff', 'bmp', 'wmf', 'webp', 'gif'], icon: 'icon-file-image', color: '#cbf38a' },
  { fileTypes: ['txt'], icon: 'icon-doc-text-inv', color: '#ffffff' },
  { fileTypes: ['mp3', 'aac', '3gp', 'aa', 'act', 'aiff', 'alac', 'amr', 'ape'], icon: 'icon-file-audio', color: '#ffffff' },
  {
    fileTypes: ['mp4', 'webm', 'mpg', 'mpeg', 'mpe', 'ogg', 'm4p', 'm4v', 'avi', 'wmv', 'mov', 'flv', 'swf'],
    icon: 'icon-file-video',
    color: '#ffffff'
  },
  { fileTypes: ['csv'], icon: 'icon-database', color: '#ffffff' }
];
