import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../shared/services/book.service';
import {Book} from '../shared/models/book';
import {User} from '../shared/models/user';
import {UserService} from '../shared/services/user.service';
import {Consts} from '../shared/Consts';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:number;
  book:Book = new Book();
  quantity:number = 1;
  added:boolean = false;
  connected:boolean = localStorage.getItem(Consts.USER_STORAGE)!=null &&localStorage.getItem(Consts.TOKEN_STORAGE)!=null;

  constructor(private route:ActivatedRoute,
              private bookService:BookService,
              private userService:UserService,
              private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id = parseInt(params['id']);
      this.bookService.get(this.id).subscribe(data=>{
        this.book = data;
      },error1 => {
        this.router.navigateByUrl("/");
      });
    })
  }

  addToCart(){
    let base = this;
    this.userService.addToCart(this.book.id,this.quantity).subscribe(data=>{
      this.added = true;
      setTimeout(function () {
        base.added = false;
      },3000);
    });
  }
}
