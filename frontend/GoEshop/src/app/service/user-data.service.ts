import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';
import { map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Users } from '../common/users';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  createUser(username, name, lastName, password){
    return this.http.post(`${API_URL}/users/create?username=${username}&name=${name}&lastName=${lastName}&password=${password}`, null)
  }

  getUser(username: string): Observable<Users> {
    return this.http.get<Users>(`${API_URL}/users/${username}`)
  }

  updateUser(username, name, lastName, password, oldUsername){
    return this.http.put(`${API_URL}/users/update?username=${username}&name=${name}&lastName=${lastName}&password=${password}&oldUsername=${oldUsername}`, null)
  }
}
