import {Component, OnInit, Input} from '@angular/core';
import {BookService} from '../../../services/book.service';

@Component({
  selector: 'app-welcomescreen',
  templateUrl: './welcomescreen.component.html',
  styleUrls: ['./welcomescreen.component.css']
})
export class WelcomescreenComponent implements OnInit {

  public books: any;
  private wishlist = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    let checkWish = localStorage.getItem('wishlist')
    if (checkWish) {
      this.wishlist=(JSON.parse(localStorage.getItem('wishlist')));
    }
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(
      response => {
        console.log("Response ", response);
        this.books = response;
      }
    )
  }

  AddtoWishlist(book) {
    this.wishlist.push(book);
    console.log(this.wishlist);
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  }

}
