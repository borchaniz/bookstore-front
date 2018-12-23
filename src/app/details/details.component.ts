import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../shared/services/book.service';
import {Book} from '../shared/models/book';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:number;
  book:Book = new Book();
  quantity:number = 1;
  constructor(private route:ActivatedRoute,
              private bookService:BookService,
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

  addToCart(){}
}
