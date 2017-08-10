import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  private wishlist:any;
  constructor() { }

  ngOnInit() {
    this.wishlist= JSON.parse(localStorage.getItem('wishlist'))
  }

}
