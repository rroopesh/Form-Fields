import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url='';
  constructor(public _http: HttpClient) { }

  enroll(user : User) {
    return this._http.post<any>(this._url, user);
  }
}
