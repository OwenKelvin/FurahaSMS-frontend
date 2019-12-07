import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  contactAdmin(data: {email: string}) {
    return of({
      message: 'Successfully Contacted Admin'
    });
  }
  resetPassword(data: {email: string}) {
    return of({
      message: 'Password Reset Successful'
    });
  }
}
