import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getDate();
  }

  getDate() {
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        this.data = data;
      });
  }
}
