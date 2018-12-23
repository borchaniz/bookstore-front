import { Component, OnInit } from '@angular/core';
import {User} from '../shared/models/user';
import {UserService} from '../shared/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  user:User = new User();

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getAuthUser().subscribe(data =>{
      this.user = data;
      console.log(data);
    });
  }

}
