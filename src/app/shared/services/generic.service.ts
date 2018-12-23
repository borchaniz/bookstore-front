import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  public url: string;
  headers: HttpHeaders = new HttpHeaders();

  constructor() {
    this.url = 'http://localhost:8080/';
    this.headers.append('Content-Type', 'application/json');
  }
}
