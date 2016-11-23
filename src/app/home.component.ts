import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-home',
  template: `
    <p>
      hello to recipe book
    </p>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
