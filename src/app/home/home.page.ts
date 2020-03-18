import { Component } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  page = 0;
  resultsCount = 10;
  totalPages = 10;

  data = [];

  constructor(private http: HttpClient) {
    this.loadData();
  }

  loadData() {
    this.http
      .get(`https://randomuser.me/api/?pages=${this.page}&results=${this.resultsCount}`)
      .subscribe(res => {
        console.log('res: ', res);
        this.data = res['results'];
      });
  }

}
