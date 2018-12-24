import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Consts} from '../Consts';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  public url: string;
  headers: HttpHeaders = new HttpHeaders();

  constructor() {
    this.url = Consts.BASE_URL;
    this.headers.append('Content-Type', 'application/json');
  }
}
