import {Injectable} from '@angular/core';
import {ICourse} from '../models/course.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {
  }

  getPublicContests(): Observable<ICourse[]> {
    return this.http
      .get<ICourse[]>(`https://apiteste.mundodocodigo.com.br/wokTestes/api/public/courses/contests`);
  }
}
