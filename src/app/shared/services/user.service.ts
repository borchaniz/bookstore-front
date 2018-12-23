import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GenericService} from './generic.service';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericService {

  constructor(private http: HttpClient) {
    super();
  }


  public register(user: User): Observable<User> {
    return <Observable<User>> this.http.post(this.url + 'user/register/', user);
  }

  public login(user: User): Observable<HttpResponse<Object>> {
    return <Observable<HttpResponse<Object>>> this.http.post(this.url + 'login', user,{observe: "response"});
  }
}
