import {Component, OnInit} from '@angular/core';
import {User} from '../shared/models/user';
import {UserService} from '../shared/services/user.service';
import {Consts} from '../shared/Consts';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    if (!localStorage.getItem(Consts.TOKEN_STORAGE) || !localStorage.getItem(Consts.USER_STORAGE)) {
      localStorage.clear();
      this.router.navigateByUrl('/');
    }
    this.userService.getAuthUser().subscribe(data => {
      this.user = data;
      console.log(data);
    });
  }

  clearCart() {
    this.userService.clearCart().subscribe(data => {
      this.user = data;
    });
  }
}
