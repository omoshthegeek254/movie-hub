import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //import http
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
