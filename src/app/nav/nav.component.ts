import {Component, OnInit} from '@angular/core';
import {BookService} from '../shared/services/book.service';
import {Genre} from '../shared/models/genre';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  genres: Genre[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getAllGenres().subscribe(data => {
      this.genres = data;
    });
  }

}
