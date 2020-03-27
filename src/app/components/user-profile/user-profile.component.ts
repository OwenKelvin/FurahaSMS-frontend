import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  context: any;

  constructor() { }
  @Input() title: string;
  @Input() profile: any;
  @Input() linkBase: any[];
  @Input() links: any[];
  @Input() includeProfileId = true;
  editMode: boolean = false;

  photoSrc: any;

  ngOnInit() {
  }
  get fullName(): string {
    return this.profile.firstName + ' ' + this.profile.lastName
      + (this.profile.middleName ? (' ' + this.profile.middleName) : '')
      + (this.profile.otherNames ? (' ' + this.profile.otherNames) : '')
      + (this.profile.userId ? (' ' + this.profile.userId) : '');
  }
  fullLink(link: string) {
    if (this.includeProfileId) {
      return [...this.linkBase, this.profile.id, link];
    }
    return [...this.linkBase, link];
  }

  onFileSelected() {
    const $canvas: any = document.querySelector('#profilePhotoCanvas');
    this.context = $canvas.getContext('2d');
    const imageObj = new Image();
    const $input: any = document.querySelector('#profilePhotoInput');
    const photoFile: File = (($input as HTMLInputElement).files as FileList)[0];
    this.photoSrc = URL.createObjectURL(photoFile);
    imageObj.onload = () => {
      this.fitImageOn($canvas, imageObj);
    };
    imageObj.src = this.photoSrc;

  }
  
  fitImageOn(canvas: any, imageObj: any) {
    const imageAspectRatio = imageObj.width / imageObj.height;
    const canvasAspectRatio = canvas.width / canvas.height;
    let renderableHeight, renderableWidth, xStart, yStart;

    // If image's aspect ratio is less than canvas's we fit on height
    // and place the image centrally along width
    if (imageAspectRatio < canvasAspectRatio) {
      renderableHeight = canvas.height;
      renderableWidth = imageObj.width * (renderableHeight / imageObj.height);
      xStart = (canvas.width - renderableWidth) / 2;
      yStart = 0;
    }

    // If image's aspect ratio is greater than canvas's we fit on width
    // and place the image centrally along height
    else if (imageAspectRatio > canvasAspectRatio) {
      renderableWidth = canvas.width;
      renderableHeight = imageObj.height * (renderableWidth / imageObj.width);
      xStart = 0;
      yStart = (canvas.height - renderableHeight) / 2;
    }

    // Happy path - keep aspect ratio
    else {
      renderableHeight = canvas.height;
      renderableWidth = canvas.width;
      xStart = 0;
      yStart = 0;
    }
    this.context.drawImage(imageObj, xStart, yStart, renderableWidth, renderableHeight);
  };


}
