import { Component, OnInit } from '@angular/core';
import { Bookservice } from './productlist.component.services';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  livros: any;
  bookService: Bookservice

  constructor(bookService: Bookservice) {

    this.bookService = bookService

   }

  ngOnInit(): void {

    this.livros = this.bookService.getBook().subscribe((data => {

      this.livros = data;
      console.log(this.livros)
      
    }))

  }

}
