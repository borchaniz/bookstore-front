import {Component, OnInit} from '@angular/core';
import {Book} from '../shared/models/book';
import {BookService} from '../shared/services/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Book[] = [];
  genreId: number = null;

  constructor(private bookService: BookService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.genreId = this.route.snapshot.params['id'];
        if (this.genreId == null) {
          this.bookService.getAllBooks().subscribe(data => {
            this.books = data;
          });
        }else{
          this.bookService.getBooksByGenre(this.genreId).subscribe(data => {
            this.books = data;
          });
        }
      });


  }

}
