import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  constructor(private http: HttpClient) { }
  getEmployee(): Observable<any>{
    return this.http.get('http://localhost:3000/employee');
  }

  postEmployee(data:any): Observable<any>{
    return this.http.get('http://localhost:3000/employee', data);
  }
}
