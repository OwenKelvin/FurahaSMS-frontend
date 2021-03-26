import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  constructor(
    private http: HttpClient
  ) { }


  getProfilePicture({ fileId }: { fileId: number }) {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/pdf');
    headers.append('Content-Type', 'application/pdf');
    return this.http.get(`api/files/${fileId}`, { headers, responseType: 'blob' });
  }

  fitImageOn($canvas: HTMLCanvasElement, imageObj: any) {
    const context = $canvas.getContext('2d');
    $canvas.height = $canvas.width;
    const imageAspectRatio = imageObj.width / imageObj.height;
    const canvasAspectRatio = $canvas.width / $canvas.height;
    let renderableHeight;
    let renderableWidth;
    let xStart;
    let yStart;

    // If image's aspect ratio is less than canvas's we fit on height
    // and place the image centrally along width
    if (imageAspectRatio < canvasAspectRatio) {
      renderableHeight = $canvas.height;
      renderableWidth = imageObj.width * (renderableHeight / imageObj.height);
      xStart = ($canvas.width - renderableWidth) / 2;
      yStart = 0;
    }

    // If image's aspect ratio is greater than canvas's we fit on width
    // and place the image centrally along height
    else if (imageAspectRatio > canvasAspectRatio) {
      renderableWidth = $canvas.width;
      renderableHeight = imageObj.height * (renderableWidth / imageObj.width);
      xStart = 0;
      yStart = ($canvas.height - renderableHeight) / 2;
    }

    // Happy path - keep aspect ratio
    else {
      renderableHeight = $canvas.height;
      renderableWidth = $canvas.width;
      xStart = 0;
      yStart = 0;
    }
    context?.drawImage(imageObj, xStart, yStart, renderableWidth, renderableHeight);
  };
}
