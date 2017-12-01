import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <br/>
  <br/>
    <div class="header">
      <h1 style="text-align: center">
         {{title}}
      </h1>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = '© Copyright Ngọc Lộc';

  constructor() { }

  ngOnInit() {
  }

}