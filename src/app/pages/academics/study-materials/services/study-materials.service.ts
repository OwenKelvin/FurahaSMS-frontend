import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudyMaterialsService {
  constructor(private http: HttpClient) {
  }
  downloadDocumentWithFilePath(filePath: any) {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/octet-stream');
    headers.append('Content-Type', 'application/octet-stream');

    return this.http.get(`api/study-materials/document-uploads`, {
      params: {['file_path']: filePath},
      headers, responseType: 'blob'});
  }

  getMaterialWithId(id: number): any {
    return this.http.get(`api/study-materials/${id}`);
  }

  getAll({active}: { active: any }): any {
    return this.http.get(`api/study-materials?active=${active}`);
  }

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

  saveStudyMaterialInfo({docId, data}: { docId: number; data: any }): Observable<any> {
    const {title, units, classLevels} = data;
    return this.http.post('api/study-materials', {
      title, units, classLevels, docId
    });
  }
}
