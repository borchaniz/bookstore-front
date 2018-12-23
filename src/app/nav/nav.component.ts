import {Component, OnInit} from '@angular/core';
import {BookService} from '../shared/services/book.service';
import {Genre} from '../shared/models/genre';
import {User} from '../shared/models/user';
import {UserService} from '../shared/services/user.service';
import {Consts} from '../shared/Consts';

declare var swal: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  genres: Genre[] = [];
  loggedUser: User = JSON.parse(localStorage.getItem(Consts.USER_STORAGE));
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
      localStorage.setItem(Consts.TOKEN_STORAGE, resp.headers.get('Authorization'));
      this.userService.getAuthUser().subscribe(data => {
        localStorage.setItem(Consts.USER_STORAGE, JSON.stringify(data));
        location.reload();

      });
    }, error => {
      swal('Error', 'Please make sure you have entered the right credentials!', 'error');
      localStorage.clear();
    });
  }

  logout() {
    localStorage.clear();
    location.reload();
  }

}
