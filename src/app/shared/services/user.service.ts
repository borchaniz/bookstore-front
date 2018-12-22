import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GenericService} from './generic.service';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericService {

  constructor(private http: HttpClient) {
    super();
    this.url += 'user/';
  }


  public register(user: User): Observable<User> {
    return <Observable<User>> this.http.post(this.url + 'register/', user);
  }
}
