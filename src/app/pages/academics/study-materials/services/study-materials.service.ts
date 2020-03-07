import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudyMaterialsService {

  constructor(private http: HttpClient) { }
  uploadDocument(file: File): Observable<any> {
    // return of({
    //   saved: true,
    //   message: 'Successfully uploaded file',
    //   data: {
    //     id: 254
    //   }
    // });
    return this.http.post('api/document-uploads', file, {
      headers: {
        "Content-Type": file.type
      }
    })
  }
  saveStudyaterialInfo({ docId }): Observable<any> {
    return of({
      saved: true,
      message: 'Successfully Saved Docs',
      data: {
        id: 75587
      }
    });
  }
}
