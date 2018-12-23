import {Component, OnInit} from '@angular/core';
import {BookService} from '../shared/services/book.service';
import {Genre} from '../shared/models/genre';
import {User} from '../shared/models/user';
import {UserService} from '../shared/services/user.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  genres: Genre[] = [];
  user: User = new User();

  constructor(private bookService: BookService, private userService: UserService) {
  }

  ngOnInit() {
    this.bookService.getAllGenres().subscribe(data => {
      this.genres = data;
    });
  }

  login() {
    this.userService.login(this.user).subscribe(resp => {
      // display its headers
      console.log(resp.headers.get("Authorization"));
    });
  }

}
