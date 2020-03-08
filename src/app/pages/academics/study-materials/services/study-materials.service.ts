import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudyMaterialsService {
  getAll({ active }): any {
    return this.http.get(`api/study-materials?active=${active}`)
  }

  constructor(private http: HttpClient) { }
  uploadDocument(file: File): Observable<any> {

    var myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    myFormData.append('pdfFile', file);

    return this.http.post('api/study-materials/document-uploads', myFormData, {
      headers
    })
  }
  saveStudyaterialInfo({ docId, data }): Observable<any> {
    const { title, units, classLevels } = data;
    return this.http.post('api/study-materials', {
      title, units, classLevels, docId
    });
  }
}
