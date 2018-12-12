import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  public url: string;

  constructor() {
    this.url = 'http://localhost:8080/';
  }
}
