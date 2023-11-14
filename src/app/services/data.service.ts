import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../entities/Student';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://192.168.1.101:8080';

  constructor(private http: HttpClient) {}

  getStudentData(): Observable<Student[]> {
    return this.http.get<Student[]>('http://192.168.1.101:8080/students');
  }

  getStudentByIndex(index: string): Observable<Student> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
      }),
    };

    const encodedIndex = encodeURIComponent(index);
    const url = `${this.apiUrl}/student?index=${encodedIndex}`;
    return this.http.get<Student>(url, httpOptions);
  }
}
