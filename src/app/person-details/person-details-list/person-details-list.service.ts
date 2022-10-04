import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPersons, IResponse } from './person-details-list.interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonDetailsListService {

  constructor(private http: HttpClient) { }
  
  getPersons(): Observable<IPersons[] > {
    return this.http.get<IPersons[]>('https://localhost:7157/api/Users')
  }
  getPersonsbyName(name:string): Observable<IPersons[] > {
    return this.http.get<IPersons[]>(`https://localhost:7157/api/Users/${name}`)
  }
  deletePerson(id:number): Observable<void > {
    return this.http.delete<void>(`https://localhost:7157/api/Users/${id}`)
  }
}
