import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  createUser(username, name, lastName, password){
    return this.http.post(`${API_URL}/users/create?username=${username}&name=${name}&lastName=${lastName}&password=${password}`, null).pipe(map(response =>{
      return response;
    },
    catchError(err => of([]))));
  }
}
