import {Genre} from './genre';

export class Book {
  id: number;
  title: string;
  synopsis: string;
  price: number;
  issuedOn: Date;
  genre: Genre = new Genre();
}
