import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL, AUTHENTICATED_USER, TOKEN, ROLE } from '../app.constants';
import { map } from 'rxjs/operators';
import { Users } from '../common/users';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username, password){
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(`${API_URL}/authcheck`, {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          // console.log( sessionStorage.getItem(AUTHENTICATED_USER))
          // console.log( sessionStorage.getItem(TOKEN))
          return data;
        }
      )
    );
  }

  setUserRole(username){
    let role: string;
    return this.http.get<Users>(`${API_URL}/users/${username}`).pipe(map(
      data => {
        role = data.role.role
        
        sessionStorage.setItem(ROLE, role)
      }
    ))
  }

  getUserRole(){
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem(ROLE)
    }
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem(TOKEN)
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
    sessionStorage.removeItem(ROLE);
  }

}

export class AuthenticationBean{
  constructor(public message: string){}
}
