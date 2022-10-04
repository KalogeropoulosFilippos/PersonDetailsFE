import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreatePerson } from './person-details-insert.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonDetailsInsertService {

  constructor(private http: HttpClient) { }
  createPerson(postPerson: ICreatePerson): Observable<void> {
    return this.http.post<void>('https://localhost:7157/api/Users', postPerson)
  }
  updatePerson(id:number,postPerson: ICreatePerson): Observable<void> {
    return this.http.put<void>(`https://localhost:7157/api/Users/${id}`, postPerson)
  }
}
