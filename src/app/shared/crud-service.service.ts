import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private http: HttpClient) { }

  getEmployee(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/users');
  }
  getEmployeeById(id): Observable<User>{
    return this.http.get<User>('http://localhost:3000/users'+id);
    console.log("this is the id"+id);
  }
  postUsers(user: User): Observable<User>{
    return this.http.post<User>('http://localhost:3000/users', user, this.httpOptions );
    console.log('added !! !');  }

    modifierEmploye(user :User,id):Observable<User>{
      return this.http.put<User>('http://localhost:3000/users/'+id,user, this.httpOptions);
    }

    deleteEmploye(id):Observable<User>{
    return this.http.delete<User>('http://localhost:3000/users/'+id);
    console.log("normalement DELETED")
    }
}
