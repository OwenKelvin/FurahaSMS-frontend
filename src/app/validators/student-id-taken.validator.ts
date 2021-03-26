import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { StudentService } from '../services/student.service';
@Injectable({
  providedIn: 'root'
})
export class IdNumberValidator {
  constructor(private studentService: StudentService) { }

  studentIdTaken(control: FormControl): any {

    return new Promise((resolve, reject) => {
      this.studentService.getStudentBySchoolId(control.value).subscribe(
        data => {
          if (data.id) {
            resolve({
              ['id_taken']: true
            });
          } else {
            resolve(null);
          }

        },
        () => {
          reject();
        }
      );
    });
  }

}
