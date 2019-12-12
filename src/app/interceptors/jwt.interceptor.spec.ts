import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
import { JwtInterceptor } from './jwt.interceptor';

describe(`AuthHttpInterceptor`, () => {
  let authenticationService: AuthenticationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthenticationService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptor,
          multi: true,
        },
      ],
    });

    authenticationService = TestBed.get(AuthenticationService);
    httpMock = TestBed.get(HttpTestingController);
  });
  it('should not add an Authorization header to api/oauth/token', () => {
    authenticationService.login({ username: '', password: '' }).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne(`api/oauth/token`);
    expect(httpRequest.request.headers.has('Authorization')).toEqual(false);
  });
});