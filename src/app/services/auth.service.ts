import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ILogin} from '../models/Login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(login: ILogin): void {
    // return this.http.get()
  }
}
