import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudyMaterialsService {
  downloadDocumentWithFilePath(filePath: any) {
    const querystring = require('querystring');

    const queryStringParams = querystring.stringify({ file_path: filePath });
    const headers = new HttpHeaders();

    headers.append('Accept', 'application/pdf');
    headers.append('Content-Type', 'application/pdf',);

    return this.http.get(`api/study-materials/document-uploads?${queryStringParams}`, { headers, responseType: 'blob' })
  }
  getMaterialWithId(id: number): any {
    return this.http.get(`api/study-materials/${id}`);
  }
  getAll({ active }): any {
    return this.http.get(`api/study-materials?active=${active}`);
  }

  constructor(private http: HttpClient) { }
  uploadDocument(file: File): Observable<any> {

    const myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    myFormData.append('pdfFile', file);

    return this.http.post('api/study-materials/document-uploads', myFormData, {
      headers
    });
  }
  saveStudyaterialInfo({ docId, data }): Observable<any> {
    const { title, units, classLevels } = data;
    return this.http.post('api/study-materials', {
      title, units, classLevels, docId
    });
  }
}
